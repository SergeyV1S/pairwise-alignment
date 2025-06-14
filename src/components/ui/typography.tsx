import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/helpers";

type TTypographyTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface ITypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  tag?: TTypographyTag;
}

const typographyVariants = cva(
  "align-middle tracking-normal selection:text-white selection:bg-black",
  {
    variants: {
      variant: {
        m_medium: "font-medium text-lg lg:text-2xl max-sm:text-base leading-[130%]",
        s_medium: "font-medium text-base lg:text-lg max-sm:text-sm leading-[130%]",
        xs: "font-normal text-sm lg:text-base max-sm:text-xs leading-[150%]",
        s: "font-normal text-base lg:text-lg max-sm:text-sm leading-[150%]"
      }
    },
    defaultVariants: {
      variant: "s"
    }
  }
);

const Typography = ({ className, variant, tag = "p", ...props }: ITypographyProps) => {
  const Comp = tag;

  return (
    <Comp
      data-slot={variant ?? "xs"}
      className={cn(typographyVariants({ variant }), className, "")}
      {...props}
    />
  );
};

export { Typography, typographyVariants };
