"use client";
import React, { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          aria-label="Back to top"
        >
          <IoMdArrowUp size={20} />
        </button>
      )}
    </>
  );
};