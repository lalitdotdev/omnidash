import prismadb from '@/lib/prismadb';

interface PendingAmountResult {
  numberOfUnpaidOrders: number;
  totalUnpaidAmount: number;
}

export const getPendingAmount = async (storeId: string): Promise<PendingAmountResult> => {
  const unpaidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: false,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const result: PendingAmountResult = unpaidOrders.reduce(
    (accumulatedResult, order) => {
      const orderTotal = order.orderItems.reduce((orderSum, item) => {
        return orderSum + item.product.price.toNumber();
      }, 0);

      return {
        numberOfUnpaidOrders: accumulatedResult.numberOfUnpaidOrders + 1,
        totalUnpaidAmount: accumulatedResult.totalUnpaidAmount + orderTotal,
      };
    },
    { numberOfUnpaidOrders: 0, totalUnpaidAmount: 0 },
  );

  return result;
};
