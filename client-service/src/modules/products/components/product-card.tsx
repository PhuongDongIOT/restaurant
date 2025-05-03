'use client'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu';
import { IProduct } from '@/lib/schemas/product.schema';
import { ShoppingCart } from 'lucide-react';
import { useProductInteraction } from '../hook/use-product-interaction';

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: IProduct;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
  onClick?: () => void;
}
export function ProductCard({
  product,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  onClick,
  ...props
}: ProductCardProps) {

  const { disabled, addProductToCart, openModalProductOverview } = useProductInteraction();

  return (
    <div className={cn('space-y-3 relative border-orange-200 border-1 p-1 rounded-sm')} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className={cn(className, 'overflow-hidden w-full h-[7rem] md:h-[20rem] rounded-md relative')}>
            <Image
              onClick={() => openModalProductOverview(`${product.id}`)}
              src={product.image}
              alt={product.description}
              width={width}
              height={height}
              className={cn(
                'h-full w-full object-cover transition-all hover:scale-105'
              )}
            />
            <div
              className={cn(
                `absolute bottom-0 right-0 bg-red-500 p-2 z-10 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg`,
                { 'opacity-45 pointer-events-none': disabled }
              )}
              onClick={() => !disabled && addProductToCart(product)}
            >
              <ShoppingCart color='white' />
            </div>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className='mt-2 space-y-1 text-sm'>
        <h3 className='text-lg font-medium leading-none'>{product.product_name}</h3>
        <p className='text-2xs text-cyan-500 line-clamp-1'>{product.price} VND</p>
        <p className='text-xs text-muted-foreground line-clamp-1'>{product.description}</p>
      </div>
    </div>
  );
}
