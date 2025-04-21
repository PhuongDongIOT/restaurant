import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import CategoryCreateForm from "../category-form";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

type ProductDialogProps = {
    children: React.ReactNode;
}
export function CategoryCreateDialog({ children }: ProductDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogHeader className="hidden">
                <DialogTitle>Edit profile</DialogTitle> 
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
            <DialogContent className="w-full sm:min-w-2lg">
                <CategoryCreateForm pageTitle={"New"} />
            </DialogContent>
        </Dialog>
    )
}