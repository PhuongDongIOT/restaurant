import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectPayment() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a payment" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tiền mặt</SelectLabel>
          <SelectItem value="apple">Thanh toán</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
