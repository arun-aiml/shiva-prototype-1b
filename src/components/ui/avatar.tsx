import * as React from "react"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { size?: "default" | "sm" | "lg" }
>(({ className, size = "default", ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full",
      {
        "h-10 w-10": size === "default",
        "h-8 w-8": size === "sm",
        "h-12 w-12": size === "lg",
      },
      className
    )}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback }
