'use client';

import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { IBlog } from '@/lib/schemas/blog.schema';

export const columns: ColumnDef<IBlog>[] = [
  {
    accessorKey: 'image',
    header: 'HÌNH ẢNH',
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
    accessorKey: 'title',
    header: 'TIÊU ĐỀ'
  },
  {
    accessorKey: 'description',
    header: 'MÔ TẢ',
    cell: ({ row }) => {
      return (
        <div className='block w-full max-w-md'>
          <p className='w-full line-clamp-1'>
            {row.getValue('description')}
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
