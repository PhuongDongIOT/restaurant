import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { CreateAddressForm } from "./create-address-form";

type DialogAddressProps = {
    onChangeDialog?: () => void
}
export function DialogAddress({ onChangeDialog }: DialogAddressProps) {
    const [open, setOpen] = useState(false);
    const onChangeAddress = () => {
        setOpen(false);
        onChangeDialog && onChangeDialog();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline">Thêm</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Thêm địa chỉ</DialogTitle>
                    <DialogDescription>
                        Thực hiện thay đổi cho hồ sơ của bạn tại đây. Nhấp vào lưu khi bạn hoàn tất.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <CreateAddressForm onChangeAddress={onChangeAddress} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
