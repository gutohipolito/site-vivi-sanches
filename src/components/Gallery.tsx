"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            {/* Grid Layout - Boxed & Standardized */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setSelectedImage(src)}
                        className="group relative cursor-pointer overflow-hidden rounded-[20px] bg-warm-alabaster aspect-[4/3] shadow-sm hover:shadow-glow-gold transition-all duration-500 border border-primary-bronze/10"
                    >
                        <img
                            src={src}
                            alt="Clínica Vivian Sanches"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-deep-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary-bronze shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                                <ZoomIn size={20} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-deep-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                    >
                        {/* Close Button */}
                        <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                            <X size={32} />
                        </button>

                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Clínica Vivian Sanches - Full View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
