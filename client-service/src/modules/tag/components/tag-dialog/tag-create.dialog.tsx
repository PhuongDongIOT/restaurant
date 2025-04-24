import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import TagCreateForm from "./tag-form";

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
                <DialogTitle>Tạo mới Tag</DialogTitle>
                <DialogDescription>
                    Thực hiện thay đổi cho hồ sơ của bạn tại đây. Nhấp vào lưu khi bạn hoàn tất.
                </DialogDescription>
            </DialogHeader>
            <DialogContent className="w-full sm:min-w-2lg">
                <TagCreateForm pageTitle="Tạo mới" />
            </DialogContent>
        </Dialog>
    )
}