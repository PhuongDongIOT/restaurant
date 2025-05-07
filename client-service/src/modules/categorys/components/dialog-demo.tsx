'use client'
import {
    Dialog,
    DialogContent
} from '@/components/ui/dialog'
import { useModal } from './modal-provider'
import ProductOverview from '../../products/components/product-overviews';
import { useSelectedProduct } from '@/modules/products/contexts/selected-product.context';

export default function DialogDemo() {
    const { modal, setModal } = useModal();
    const { selectedProduct } = useSelectedProduct();
    return (
        <div className='relative z-60`'>
            <Dialog open={modal} onOpenChange={() => setModal(false)}>
                <DialogContent className='z-100 h-screen w-full sm:min-w-2lg md:min-w-2xl lg:min-w-6xl'>
                    <div className='bg-white h-screen overflow-y-scroll'>
                        <ProductOverview product={selectedProduct} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
