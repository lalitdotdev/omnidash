import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth(); // we have access to the user id here that wants to create new store using our api

    const body = await req.json();
    const { name, billboardId } = body;

    if (!userId) {
      return new NextResponse("Unautheticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!billboardId) {
      return new NextResponse("BillboardId is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    //! check if the storeId exists for the authenticated user

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    // create new billboard using prisma client instance and return the billboard data to the client

    const category = await prismadb.category.create({
      data: {
        name,
        billboardId,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.log(`[CATEGORIES_POST] ${error}`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// Getting all the billboards for a store by storeId

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth(); // we have access to the user id here that wants to create new store using our api

    if (!userId) {
      return new NextResponse("Unautheticated", { status: 401 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    // get all the billboards for the storeId

    const categories = await prismadb.category.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.log(`[CATEGORIES_GET] ${error}`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
