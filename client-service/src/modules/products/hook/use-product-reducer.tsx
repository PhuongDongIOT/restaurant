import { useModal } from "../../categorys/components/modal-provider";
import { useSelectedProduct } from "@/modules/products/contexts/selected-product.context";
import { productUserService } from "@/lib/services/product.service";

export function useProductOverView() {
    const { setModal } = useModal();
    const { setSelectedProduct } = useSelectedProduct();

    const openModalProductOverview = async (id: string) => {
        const { data: product } = await productUserService.details(id);
        setSelectedProduct(product);
        setModal(true);
    };
    return {
        openModalProductOverview,
    };
}
