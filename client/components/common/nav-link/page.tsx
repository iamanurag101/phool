"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./styles.scss";

export default function Navlink(
    {
        href, 
        children, 
        className
    }
    :
    {
        href: string; 
        children: React.ReactNode; 
        className?: string
    }) {
        const pathname = usePathname();
        const isActive = (pathname === href || pathname.startsWith(href))

        return (
            <Link
                href={href}
                className={["nav-link", className].filter(Boolean).join(" ")}
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "page" : undefined}
                >
                {children}
            </Link>
        );
}