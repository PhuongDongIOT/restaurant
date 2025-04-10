import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ProductCreateForm from "../product-form/product-create.form";

type ProductDialogProps = {
    children: React.ReactNode;
}
export function ProductCreateDialog({ children }: ProductDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="h-screen w-full sm:min-w-2lg md:min-w-2xl lg:min-w-6xl">
                <div className="h-screen overflow-y-scroll">
                    <ProductCreateForm pageTitle={"New"} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
