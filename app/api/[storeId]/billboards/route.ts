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
    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unautheticated", { status: 401 });
    }
    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
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

    const billboard = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log(`[BILLBOARDS_POST] ${error}`, error);
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

    const billboards = await prismadb.billboard.findMany({
      where: {
        storeId: params.storeId,
      },
    });

    return NextResponse.json(billboards);
  } catch (error) {
    console.log(`[BILLBOARDS_GET] ${error}`, error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
