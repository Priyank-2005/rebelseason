import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Base classes
    let btnClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
    
    // Variant classes
    if (variant === "default") {
      btnClasses += " bg-primary text-primary-foreground hover:bg-primary/90"
    } else if (variant === "outline") {
      btnClasses += " border border-input bg-background hover:bg-muted hover:text-foreground"
    } else if (variant === "secondary") {
      btnClasses += " bg-secondary text-secondary-foreground hover:bg-secondary/80"
    } else if (variant === "ghost") {
      btnClasses += " hover:bg-muted hover:text-foreground"
    } else if (variant === "link") {
      btnClasses += " text-primary underline-offset-4 hover:underline"
    }

    // Size classes
    if (size === "default") {
      btnClasses += " h-9 px-4 py-2"
    } else if (size === "sm") {
      btnClasses += " h-8 rounded-md px-3 text-xs"
    } else if (size === "lg") {
      btnClasses += " h-10 rounded-md px-8"
    } else if (size === "icon") {
      btnClasses += " h-9 w-9"
    }

    return (
      <Comp
        className={cn(btnClasses, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
