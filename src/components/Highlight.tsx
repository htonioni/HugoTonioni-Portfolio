import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export const Highlight: React.FC<HighlightProps> = ({ 
  children, 
  className = "",
  variant = "primary" 
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent",
    secondary: "bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent", 
    accent: "bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"
  };

  const baseClasses = "font-semibold";
  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <span className={finalClasses}>
      {children}
    </span>
  );
};