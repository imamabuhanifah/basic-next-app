"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";
import "./styles.css"

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    const [input, setInput] = useState("")

    return (
        <div>
            <input style={{ backgroundColor: "lightyellow" }} value={input} onChange={(e) => setInput(e.target.value)} />
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);

                return (
                    <>
                        <Link href={link.href}
                            key={link.name}
                            className={isActive ? "font-Bold mr-4" : "text-blue-500 mr-4"}
                        >
                            {link.name}
                        </Link>
                        <br />
                    </>
                );
            })}
            {children}
        </div>
    )
}