import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CustomerCreateForm from "../customer-form/customer-create.form";

type ProductDialogProps = {
    children: React.ReactNode;
}
export function CustomerCreateDialog({ children }: ProductDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogHeader className="hidden">
                <DialogTitle>Edit Customer</DialogTitle>
                <DialogDescription>
                    Make changes to your customer here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <DialogContent className="w-full sm:min-w-2lg md:min-w-2xl lg:min-w-2xl">
                <CustomerCreateForm pageTitle={"New"} />
            </DialogContent>
        </Dialog>
    )
}
