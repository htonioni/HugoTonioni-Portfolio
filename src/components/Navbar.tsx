import Image from "next/image";
import Link from "next/link";
import { 
  IoMdHome, 
  IoMdPerson, 
  IoMdFolder, 
  IoMdMail 
} from "react-icons/io";
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram 
} from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="w-60 min-h-screen overflow-hidden flex-shrink-0 bg-gray-900 text-white">
            <nav className="px-6 pt-8 pb-4">
                {/* Profile Section */}
                <div className="flex items-center gap-3 pb-6 border-b border-gray-700">
                    <Image
                        src="/images/profile-pic.png"
                        alt="Hugo Profile Picture"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="font-bold text-lg">Hugo Tonioni</h1>
                        <p className="font-light text-sm text-gray-400">Developer</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="pt-6 pb-8">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link 
                                href="/" 
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                <IoMdHome size={20} />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about" 
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                <IoMdPerson size={20} />
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/projects" 
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                <IoMdFolder size={20} />
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                <IoMdMail size={20} />
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-700 pt-6">
                    <h2 className="mb-4 font-bold text-sm text-gray-300 uppercase tracking-wide">
                        Socials
                    </h2>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link 
                                href="https://linkedin.com/in/htonioni" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                            >
                                <FaInstagram size={18} className="text-pink-500" />
                                <span>Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};