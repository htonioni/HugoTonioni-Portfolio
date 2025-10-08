"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
    IoMdHome,
    IoMdPerson,
    IoMdFolder,
    IoMdMail,
    IoMdMenu,
    IoMdClose,
    IoMdDocument
} from "react-icons/io";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram
} from "react-icons/fa";
import { SimpleThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to check if the current page is active
    const isActive = (href: string) => pathname === href;

    // Function to get active link styles
    const getLinkStyles = (href: string) => {
        const baseStyles = "flex items-center gap-3 px-3 py-2 rounded-lg transition duration-200";
        const inactiveStyles = "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100";
        const activeStyles = "bg-white dark:bg-gray-700 shadow-lg text-gray-900 dark:text-gray-100";
        
        return `${baseStyles} ${isActive(href) ? activeStyles : inactiveStyles}`;
    };

    return (
        <>
            {/* Mobile Menu Button - Only visible when menu is closed */}
            {!isMobileMenuOpen && (
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg border border-gray-200 dark:border-gray-700"
                    aria-label="Open mobile menu"
                >
                    <IoMdMenu size={24} />
                </button>
            )}

            {/* Sidebar */}
            <div className={`
                w-64 lg:w-60 xl:w-64 h-screen flex flex-col flex-shrink-0 
                bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100
                fixed md:relative z-40 transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <nav className="flex flex-col h-full px-4 lg:px-6 py-6">
                    {/* Profile Section */}
                    <div className="flex items-center gap-3 pb-6 flex-shrink-0">
                        <Image
                            src="/images/mini_profile.png"
                            alt="Hugo Profile Picture"
                            width={48}
                            height={48}
                            className="rounded-full flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                            <h1 className="font-bold text-lg text-gray-900 dark:text-white truncate">Hugo Tonioni</h1>
                            <p className="font-light text-sm text-gray-600 dark:text-gray-300 truncate">Developer</p>
                        </div>
                        {/* Mobile Close Button - Only visible when menu is open */}
                        {isMobileMenuOpen && (
                            <div className="md:hidden flex justify-end mb-4">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    aria-label="Close mobile menu"
                                >
                                    <IoMdClose size={18} className="text-gray-600 dark:text-gray-400" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto">
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link
                                    href="/"
                                    className={getLinkStyles("/")}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdHome size={20} className={isActive("/") ? "text-sky-500" : "flex-shrink-0"} />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={getLinkStyles("/about")}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdPerson size={20} className={isActive("/about") ? "text-sky-500" : "flex-shrink-0"} />
                                    <span>About</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className={getLinkStyles("/projects")}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdFolder size={20} className={isActive("/projects") ? "text-sky-500" : "flex-shrink-0"} />
                                    <span>Projects</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="/resume"
                                    className={getLinkStyles("/resume")}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdDocument size={20} className={isActive("/resume") ? "text-sky-500" : "flex-shrink-0"} />
                                    <span>Resume</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    href="/contact"
                                    className={getLinkStyles("/contact")}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <IoMdMail size={20} className={isActive("/contact") ? "text-sky-500" : "flex-shrink-0"} />
                                    <span>Contact</span>
                                </Link>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h2 className="mb-3 font-bold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                Socials
                            </h2>
                            <ul className="flex flex-col gap-1">
                                <li>
                                    <Link
                                        href="https://linkedin.com/in/htonioni"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                                    >
                                        <FaLinkedin size={20} />
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
                                        <FaGithub size={20} />
                                        <span>GitHub</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Theme Toggle - Fixed at bottom */}
                    <div className="pt-4 flex-shrink-0">
                        <h2 className="mb-3 font-bold text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
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