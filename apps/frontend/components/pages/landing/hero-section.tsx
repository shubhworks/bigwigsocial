"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/buttons/button"
import Image from "next/image";

export const HeroSection = () => {
    return (
        <motion.section
            className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto md:grid-cols-2 gap-10 items-center">
                {/* Left Column - Image Placeholder */}
                <motion.div
                    className="relative h-96 md:h-full min-h-96 bg-linear-to-br from-blue-100 via-cyan-50 to-white rounded-2xl overflow-hidden border border-blue-200"
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <Image
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,fit=crop/Yg2qvbN11bfoGGQw/final-01-AR0LznWzjysxZXJn.png"
                                alt="hero"
                                width={1200}
                                height={1200}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Column - Content */}
                <div className="flex flex-col justify-center items-center text-center gap-6">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
                        <p className="text-blue-500 font-semibold text-sm">About us</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mt-2 text-pretty">
                            A Digital Marketing Agency that Turns Your Brand Into a Legacy
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg text-slate-600 leading-relaxed text-pretty"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Bigwig Social helps businesses stand out in the digital landscape by creating compelling marketing
                        strategies that drive real results. We combine creativity with data-driven insights to elevate your brand.
                    </motion.p>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
                        <Button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                            Learn More <ArrowRight className="ml-2" size={18} />
                        </Button>
                    </motion.div>

                    {/* Small Image Placeholder */}
                    <motion.div
                        className="mt-8 h-32 bg-linear-to-r from-slate-100 to-slate-50 rounded-xl border border-slate-200 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <div className="text-center text-slate-400">[Client Logos Placeholder]</div><Image
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=448,fit=crop,trim=0;42.120658135283364;21.058252427184467;32.76051188299817/Yg2qvbN11bfoGGQw/whatsapp-image-2025-03-29-at-12.09.19-am-YZ98Wp4e4DF6zPOb.jpeg"
                                alt="hero"
                                width={200}
                                height={200}
                            />                
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
