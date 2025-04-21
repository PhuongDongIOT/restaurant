'use client';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { IUser } from '@/lib/schemas/user.schema';

export const columns: ColumnDef<IUser>[] = [
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
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'email',
    header: 'EMAIL'
  },
  {
    accessorKey: 'phone',
    header: 'PHONE'
  },
  {
    accessorKey: 'blocked',
    header: 'STATUS'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION',
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
