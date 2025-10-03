"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  IoMdHome, 
  IoMdPerson, 
  IoMdFolder, 
  IoMdMail,
  IoMdMenu,
  IoMdClose
} from "react-icons/io";
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
} from "react-icons/fa";
import { SimpleThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700"
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`
                w-60 min-h-screen overflow-hidden flex-shrink-0 
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-r border-gray-200 dark:border-gray-700
                fixed md:relative z-40 transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <nav className="px-6 pt-8 pb-4 h-full overflow-y-auto">
                    {/* Profile Section */}
                    <div className="flex items-center gap-3 pb-6 border-b border-gray-200 dark:border-gray-600">
                        <Image
                            src="/images/profile-pic.png"
                            alt="Hugo Profile Picture"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <h1 className="font-bold text-lg text-gray-900 dark:text-white">Hugo Tonioni</h1>
                            <p className="font-light text-sm text-gray-600 dark:text-gray-300">Developer</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="pt-6 pb-8">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link 
                                    href="/" 
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdHome size={20} />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdPerson size={20} />
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/projects" 
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdFolder size={20} />
                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/contact" 
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdMail size={20} />
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                        <h2 className="mb-4 font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Socials
                        </h2>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link 
                                    href="https://linkedin.com/in/htonioni" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                >
                                    <FaLinkedin size={18} className="text-blue-500" />
                                    <span>LinkedIn</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="https://github.com/htonioni" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                >
                                    <FaGithub size={18} />
                                    <span>GitHub</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="https://instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                >
                                    <FaInstagram size={18} className="text-pink-500" />
                                    <span>Instagram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Theme Toggle */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                        <h2 className="mb-4 font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            Theme
                        </h2>
                        <div className="px-3">
                            <SimpleThemeToggle />
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};