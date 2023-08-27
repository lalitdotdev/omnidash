import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { storeId } = params;
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Name is Required", { status: 400 });
    }
    if (!storeId) {
      return new NextResponse("Store ID is Required", { status: 400 });
    }

    // find and update store

    const store = await prismadb.store.updateMany({
      where: {
        id: storeId,
        userId,
      },
      data: {
        name,
      },
    });
    return NextResponse.json(store);
  } catch (error: any) {
    console.log(`[STORE_PATCH] `, error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string } },
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { storeId } = params;

    if (!storeId) {
      return new NextResponse("Store ID is Required", { status: 400 });
    }

    // find and update store

    const store = await prismadb.store.deleteMany({
      where: {
        id: storeId,
        userId,
      },
    });
    return NextResponse.json(store);
  } catch (error: any) {
    console.log(`[STORE_DELETE] `, error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
