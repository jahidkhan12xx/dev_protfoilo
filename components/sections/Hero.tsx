"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            Available for Work
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight tight">
                            Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
                            <br />
                            <span className="text-muted-foreground text-3xl md:text-5xl">
                                {personalInfo.title}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0"
                    >
                        {personalInfo.tagline} I specialize in building performant, scalable, and
                        aesthetically pleasing web applications using modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                    >
                        <Button size="lg" asChild>
                            <Link href="#contact">
                                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/Zahid_Hassan_Khan_Fullstack_Developer.pdf" target="_blank" download>
                                Download CV <Download className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Image / Abstract Shape */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt={personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
