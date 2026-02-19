"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    image?: string;
    align?: "left" | "center";
}

export default function PageHeader({
    title,
    subtitle,
    image = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    align = "left"
}: PageHeaderProps) {
    return (
        <div className="relative pt-48 pb-24 px-10 bg-warm-alabaster overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-5 grayscale mix-blend-multiply"
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-warm-alabaster"></div>
            </div>

            <div className={`max-w-7xl mx-auto relative z-10 ${align === 'center' ? 'text-center' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className={`text-[10px] uppercase tracking-[0.6em] font-black text-primary-bronze opacity-80 ${align === 'center' ? 'mx-auto' : ''}`}>
                        {subtitle}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-deep-charcoal leading-none tracking-tight">
                        {title}
                    </h1>
                    <div className={`w-24 h-px bg-primary-bronze/30 pt-8 ${align === 'center' ? 'mx-auto' : ''}`}></div>
                </motion.div>
            </div>
        </div>
    );
}
