import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  className = "" 
}) => {
  const baseClasses = "text-gray-600 dark:text-gray-300 leading-relaxed";
  const finalClasses = `${baseClasses} ${className}`;

  return (
    <p className={finalClasses}>
      {children}
    </p>
  );
};