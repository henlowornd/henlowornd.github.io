import type React from "react";
import { cn } from "@/lib/utils";
import PageBackground from "@/assets/images/page-background.svg";

export function Page({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  title: string
}) {
  return (
    <div className={cn(className, "page-padding pt-36 relative")} {...props}>
      <PageBackground className="absolute w-full h-full top-0 left-0 right-0 -z-10"/>

      <h1 className="text-4xl mb-7">
        {title}
      </h1>

      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
