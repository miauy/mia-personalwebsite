
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-white",
        containerClassName
      )}
    >
      <div className="bg-grid absolute inset-0 z-0 opacity-20" />
      <div
        className={cn(
          "relative z-10 flex items-center justify-center w-full",
          className
        )}
      >
        <div className="absolute inset-0 z-[-1] opacity-30">
          <div className="absolute inset-0">
            <div className="h-full w-full translate-x-1/2 translate-y-0">
              <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-gray-300 to-gray-100 opacity-50 blur-3xl" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-gray-300 to-gray-200 opacity-60 blur-3xl" />
          </div>
          <div className="absolute top-0 right-0">
            <div className="h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-gray-200 to-gray-100 opacity-40 blur-3xl" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
