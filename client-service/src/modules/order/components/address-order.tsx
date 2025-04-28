import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { IAddress } from "@/lib/schemas/address.schema";
import { addressService } from "@/lib/services/address.service";
import { DialogAddress } from "@/modules/address/components/dialog-address";

type AddressOrderProps = {
    id: string
}
export function AddressOrder({ id }: AddressOrderProps) {
    const [address, setAddress] = useState<Array<IAddress>>([]);
    const [text, setText] = useState<string>("");

    useEffect(() => {
        const initData = async () => {
            const { data } = await addressService.filters(id);
            if (data) setAddress(data)
        }

        initData()
    }, [text])

    const onChangeText = () => {
        setText(uuidv4());
    };
    
    return (
        <>
            <div className='flex justify-between'>
                <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Địa chỉ
                </label>
                <DialogAddress onChangeDialog={onChangeText} />
            </div>
            {address.map(item => (
                <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                        <RadioGroupItem value={`${item.id}`} />
                    </FormControl>
                    <FormLabel className="font-normal">
                        {item.house_name}
                    </FormLabel>
                </FormItem>
            ))}
        </>
    )
}