'use client';

import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import toast from 'react-hot-toast';
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

const onCopy = (id: string) => {
  navigator.clipboard.writeText(id);
  toast.success('Order ID copied to clipboard.');
};
export const columns: ColumnDef<OrderColumn>[] = [
  //    truuncate tghe long id in between
  {
    accessorKey: 'id',
    header: 'Order ID',
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex items-center ">
          <span className="text-[#146EB4] font-semibold"># {order.id.split('-')[0]}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'products',
    header: 'Products',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },

  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Order Amount',
  },
  {
    accessorKey: 'isPaid',
    header: 'Status',
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex items-center">
          <span
            className={`h-3 w-3 rounded-full mr-2 ${order.isPaid ? 'bg-green-500' : 'bg-red-500'}`}
            aria-hidden="true"
          />
          {order.isPaid ? 'Successful' : 'Processing'}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onCopy(order.id.split(' ')[0])}>Copy order ID</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
