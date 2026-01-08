"use client"

import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from '@/src/utils/tw-merge'
import { ComponentProps } from 'react'
import CheckIcon from '../icons/CheckIcon'


function Checkbox({
  className,
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-white/52 dark:bg-input/30 data-[state=checked]:bg-accent data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-accent data-[state=checked]:border-accent focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-6 shrink-0 rounded-md border-[1.5px] shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-30",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-dark transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
