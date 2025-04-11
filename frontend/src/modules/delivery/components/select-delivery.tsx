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

export function SelectDelivery() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a delivery" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Trực tiếp</SelectLabel>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
