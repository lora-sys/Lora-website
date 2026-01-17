"use client";
import React, { useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { GripVertical, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { AnimatePresence } from "motion/react";

export function ResizableNavbar() {
    const pathname = usePathname();
    const [width, setWidth] = useState(850); // Default width increased for visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const minWidth = 320;
    const maxWidth = 1200; // Increased max width
    
    // Handle drag to resize
    const handleDrag = (event: any, info: any) => {
        const newWidth = width + info.delta.x * 2; 
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            setWidth(newWidth);
        }
    };

    const isActive = (link: string) => {
        if (link === "/") return pathname === "/";
        if (link.startsWith("/#")) return false; // Hash links don't highlight based on pathname
        return pathname.startsWith(link);
    };

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
             <motion.nav
                className="pointer-events-auto relative h-14 bg-background/80 backdrop-blur-md border border-border rounded-full flex items-center px-4 shadow-lg"
                style={{ width }}
                layout
                aria-label="Main Navigation"
             >
                {/* Logo */}
                <div className="mr-2 shrink-0">
                    <Link href="/">
                        <Image 
                            src="/logo.svg" 
                            alt="Logo" 
                            width={32} 
                            height={32} 
                            className="w-8 h-8 rounded-full"
                        />
                    </Link>
                </div>

                {/* Nav Items */}
                <div className="flex-1 flex items-center justify-center gap-2 md:gap-6 overflow-hidden px-2">
                    {siteConfig.nav.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.link}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap px-3 py-1.5 rounded-full hover:bg-muted",
                                isActive(item.link) ? "text-primary bg-muted/50" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggler Integration (Optional, but nice to have in navbar) */}
                <div className="hidden sm:block border-l border-border pl-2 ml-2">
                    <AnimatedThemeToggler />
                </div>

                {/* Drag Handle Right */}
                <motion.div 
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-ew-resize p-1 text-muted-foreground/50 hover:text-foreground touch-none active:text-primary"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    dragMomentum={false}
                    onDrag={handleDrag}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Resize navigation bar"
                    role="slider"
                    aria-valuenow={width}
                    aria-valuemin={minWidth}
                    aria-valuemax={maxWidth}
                    tabIndex={0}
                >
                    <GripVertical className="w-4 h-4" />
                </motion.div>
             </motion.nav>
        </div>
    )
}
