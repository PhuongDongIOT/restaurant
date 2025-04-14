"use client"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { VariantProps } from "class-variance-authority";

export function ClientButton({ className, ...props }: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return <Button className={cn(className)} {...props}></Button>
}
