import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "section" | "main" | "article";
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = "",
  size = "lg",
  padding = "md",
  as: Component = "div"
}) => {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 md:px-6",
    md: "px-4 md:px-6 lg:px-8",
    lg: "px-6 md:px-8 lg:px-12"
  };

  const baseClasses = "w-full mx-auto";
  const finalClasses = `${baseClasses} ${sizeClasses[size]} ${paddingClasses[padding]} ${className}`;

  return (
    <Component className={finalClasses}>
      {children}
    </Component>
  );
};