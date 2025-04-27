import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import CategoryBlogCreateForm from "../category-blog-form";

type ProductDialogProps = {
    children: React.ReactNode;
}
export function CategoryBlogCreateDialog({ children }: ProductDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <VisuallyHidden>
                <DialogHeader>
                    <DialogTitle>Thêm mới</DialogTitle>
                    <DialogDescription>
                        Thực hiện thay đổi cho hồ sơ của bạn tại đây. Nhấp vào lưu khi bạn hoàn tất.
                    </DialogDescription>
                </DialogHeader>
            </VisuallyHidden>
            <DialogContent className="w-full sm:min-w-2lg">
                <CategoryBlogCreateForm pageTitle="Tạo mới" />
            </DialogContent>
        </Dialog>
    )
}