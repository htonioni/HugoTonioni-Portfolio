import Image from "next/image";

export const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                    <Image
                        src="/images/profile-pic.png"
                        alt="Hugo Profile Picture"
                        width={48}
                        height={48}
                    />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <h1>Socials</h1>
                <ul>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Github</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </nav>
        </div>
    )
}