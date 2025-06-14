import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/helpers/cn";

import { typographyVariants } from "./typography";

const Label = ({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    data-slot='label'
    className={cn(
      "flex items-center gap-2 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      typographyVariants({ variant: "s_medium" }),

      className
    )}
    {...props}
  />
);

export { Label };
