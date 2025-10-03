import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  as: Component = "h1", 
  className = "" 
}) => {
  const baseClasses = "font-bold text-gray-900 dark:text-white";
  const finalClasses = `${baseClasses} ${className}`;

  return (
    <Component className={finalClasses}>
      {children}
    </Component>
  );
};