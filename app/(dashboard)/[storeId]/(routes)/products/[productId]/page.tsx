import prismadb from "@/lib/prismadb";
import React from "react";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  // Server code
  //fetch product -> pass product to form

  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  //fetch categories -> pass categories to form
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  //Load sizes -> pass sizes to form
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  //Load colors -> pass colors to form
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductPage;
