"use client"

import { motion } from "framer-motion"

export const HorizontalImageSection = () => {
    return (
        <motion.section
            className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="w-full aspect-video bg-linear-to-r from-blue-100 via-cyan-100 to-blue-50 rounded-2xl border border-blue-200 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-center">
                        <div className="text-6xl mb-2">🖼️</div>
                        <p className="text-slate-500">Horizontal Image Showcase</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
