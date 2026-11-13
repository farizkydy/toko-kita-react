import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md px-3 py-1.5 text-sm font-medium transition active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white hover:bg-gray-700",
        outline: "border border-gray-300 hover:bg-gray-100",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Button({ className, variant, ...props }) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
