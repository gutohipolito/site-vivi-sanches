"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProtocolCardProps {
    title: string;
    description: string;
    image: string;
    onClick: () => void;
}

export default function ProtocolCard({ title, description, image, onClick }: ProtocolCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group cursor-pointer h-full"
            onClick={onClick}
        >
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-primary-bronze/5 border border-primary-bronze/10 h-full flex flex-col transition-all duration-500 hover:shadow-glow-gold hover:border-primary-bronze/30">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/40 to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-white/90 backdrop-blur-md text-primary-bronze text-[8px] uppercase tracking-[0.3em] font-black px-3 py-1.5 rounded-full inline-block mb-3">
                            Protocolo Exclusivo
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-deep-charcoal mb-4 group-hover:text-primary-bronze transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm text-deep-charcoal/60 leading-relaxed font-sans font-light line-clamp-3 mb-8">
                        {description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-bronze opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                            Saiba Mais
                        </span>
                        <div className="w-10 h-10 rounded-full border border-primary-bronze/20 flex items-center justify-center text-primary-bronze group-hover:bg-primary-bronze group-hover:text-white transition-all duration-500">
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
