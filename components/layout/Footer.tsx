import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t bg-background/50 backdrop-blur-sm py-8 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </div>
                <div className="flex items-center gap-4">
                    {personalInfo.socials.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
