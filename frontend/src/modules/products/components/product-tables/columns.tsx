'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { IProduct } from '@/lib/schemas/product.schema';

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: 'image',
    header: 'IMAGE',
    cell: ({ row }) => {
      return (
        <div className='relative'>
          <div className='w-16 h-16'>
            <Image
              src={row.getValue('image')}
              alt={row.getValue('image')}
              width={64}
              height={64}
              className='rounded-lg object-contain'
            />
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: 'product_name',
    header: 'NAME'
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY'
  },
  {
    accessorKey: 'stock',
    header: 'STOCK'
  },
  {
    accessorKey: 'price',
    header: 'PRICE'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
    cell: ({ row }) => {
      return (
        <div className='block w-full max-w-md'>
          <p className='w-full line-clamp-1'>
            {/* {row.getValue('description')} */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis natus cumque accusamus libero fugit ducimus. Error unde eligendi odio deleniti. Quam quo itaque quisquam temporibus perspiciatis sint animi dolore sequi.
          </p>
        </div>
      );
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original as any} />
  }
];
