import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/helpers";

import { typographyVariants } from "./typography";

const buttonVariants = cva(
  "inline-flex items-center text-white cursor-pointer disabled:cursor disabled:cursor-not-allowed justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary shadow-xs hover:bg-primary/90"
      },
      size: {
        default: "h-9 px-4 py-2",
        lg: "h-12 rounded-sm px-10 max-sm:h-10 max-sm:px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const Button = ({
  className,
  variant,
  typographyVariant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    typographyVariant?: VariantProps<typeof typographyVariants>;
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(
        buttonVariants({ variant, size, className }),
        typographyVariants({ variant: typographyVariant?.variant })
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
