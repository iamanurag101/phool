import './styles.scss';
import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    const links = ["catalogue", "about"];
    const socials = [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/iamanurag101" },
        { label: "GitHub", href: "https://github.com/iamanurag101" },
        { label: "X(Twitter)", href: "https://x.com/anuragdeyO1" },
        { label: "Discord", href: "https://discord.com/users/anuragdey_o1" },
        { label: "Email", href: "mailto:iamanuragdey005@gmail.com" }
    ];

    return (
        <section className="contact-section">
            <div className="container">
                <div className="logo-section">
                    <Link href="/">
                        <Image
                        src="/phool_logo.svg"
                        alt="Logo"
                        className="logo"
                        height={500}
                        width={500}
                        />
                    </Link>
                </div>
                <div className="menu-links">
                    <p className="header">Menu</p>
                        <ul>
                            {links.map((link, index) => (
                                <li key={link}>
                                <Link href={link} className="rolling-text">
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </Link>
                                </li>
                            ))}
                        </ul>
                </div>
                <div className="contact-links">
                    <p className="header">Connect</p>
                        <ul>
                            {socials.map((social) => (
                                <li key={social.href} style={{listStyle: "none"}}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rolling-text"
                                >
                                    {social.label}
                                </a>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Anurag Dey. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}