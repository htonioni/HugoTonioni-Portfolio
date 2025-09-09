import Image from "next/image";
import Link from "next/link"
import { IoMdHome } from "react-icons/io";

export const Navbar = () => {
    return (
        <div className="w-60 min-h-screen overflow-hidden flex-shrink-0 bg-gray-900 ">
            <nav className="pl-6 pr-6 pt-8">
                <div className="flex items-center gap-2 pb-3">
                    <Image
                        src="/images/profile-pic.png"
                        alt="Hugo Profile Picture"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h1 className="font-bold">Hugo Tonioni</h1>
                        <p className="font-light text-sm">Developer</p>
                    </div>
                </div>
                <div className="pt-8 pb-10 flex flex-col gap-10">
                    <div className="">
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="">
                        <h1 className="mb-2 font-bold">Socials</h1>
                        <ul className="flex flex-col gap-4">
                            <li><Link href="https://linkedin.com/in/htonioni" target="_blank" rel="noopener noreferrer">Linkedin</Link></li>
                            <li><Link href="https://github.com/htonioni" target="_blank" rel="noopener noreferrer">Github</Link></li>
                            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}