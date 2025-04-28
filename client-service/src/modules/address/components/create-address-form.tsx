'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAddressSchema, ICreateAddressDto } from "@/lib/schemas/address.schema";
import { defaultValuesAddress } from "@/lib/initials/address.init";
import { addressService } from "@/lib/services/address.service";
import { useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";

type CreateAddressFormProps = React.ComponentPropsWithoutRef<"form"> & {
    onChangeAddress?: () => void;
}
export function CreateAddressForm({
    className,
    onChangeAddress,
    ...props
}: CreateAddressFormProps) {

    const { user } = useAppSelector(
        (state: RootState) => state.auths
    );

    const form = useForm<ICreateAddressDto>({
        resolver: zodResolver(CreateAddressSchema),
        values: defaultValuesAddress,
    });

    const handleCreate = async (values: ICreateAddressDto) => {
        try {
            await addressService.create(values, user?.id ?? 0);
            onChangeAddress && onChangeAddress();
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    async function onSubmit(values: ICreateAddressDto) {
        handleCreate(values);
    }
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name='house_name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Địa chỉ</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Nhập địa chỉ' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Tạo
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
