"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that demonstrate my passion for building meaningful web experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                <div className="relative h-56 w-full bg-muted overflow-hidden group">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted to-secondary/20 group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
                                            <Folder className="w-16 h-16 text-muted-foreground/30" />
                                        </div>
                                    )}
                                </div>
                                <CardHeader>
                                    <CardTitle className="line-clamp-1" title={project.title}>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2" title={project.description}>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-0">
                                    <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" asChild className="flex-1">
                                        <Link href={project.liveUrl} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
