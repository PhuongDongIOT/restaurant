"use client";

import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"
import { useModal } from "./modal-provider"
import ProductOverview from "./product-overviews";
import { useSelectedProduct } from "@/modules/products/contexts/selected-product.context";

export function DialogDemo() {
    const { modal, setModal } = useModal();
    const { selectedProduct } = useSelectedProduct();
    return (
        <Dialog open={modal} onOpenChange={() => setModal(false)}>
            <DialogContent className="h-screen w-full sm:min-w-2lg md:min-w-2xl lg:min-w-6xl">
                <div className="h-screen overflow-y-scroll">
                    <ProductOverview product={selectedProduct} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
