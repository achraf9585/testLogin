import React from "react";

const sizeClasses = {
  txtPlatformRegular14IndigoA400: "font-normal font-platform",
  txtPlatformRegular14Bluegray300: "font-normal font-platform",
  txtPlatformRegular12: "font-normal font-platform",
  txtPlatformBold36: "font-bold font-platform",
  txtPlatformRegular14: "font-normal font-platform",
  txtPlatformRegular16: "font-normal font-platform",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
