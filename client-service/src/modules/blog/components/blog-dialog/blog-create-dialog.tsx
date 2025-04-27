import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import BlogCreateForm from "../blog-form/blog-create.form";

type BlogDialogProps = {
    children: React.ReactNode;
}
export function BlogCreateDialog({ children }: BlogDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="h-screen w-full sm:min-w-2lg md:min-w-2xl lg:min-w-6xl">
                <div className="h-screen overflow-y-scroll">
                    <BlogCreateForm pageTitle="Tạo mới" />
                </div>
            </DialogContent>
        </Dialog>
    )
}
