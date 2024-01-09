'use client';

import { DataTable } from '@/components/ui/data-table';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { OrderColumn, columns } from './columns';

interface OrderClientProps {
  data: OrderColumn[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading title={`Transactions | This Month (${data.length}) `} description="Manage Orders for your store" />

      <Separator />
      <DataTable searchKey="id" columns={columns} data={data} />
    </>
  );
};

export default OrderClient;
