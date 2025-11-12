"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/buttons/button"

const REASONS = [
    "Personalized strategies tailored to your business goals",
    "Honest, ethical marketing practices that build trust",
    "Marketing solutions that deliver measurable results",
]

export const WhyUsSection = () => {
    return (
        <motion.section
            className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-pretty">Why Bigwig Social</h2>
                    <p className="text-slate-600 leading-relaxed">
                        As a digital marketing agency, we understand the unique challenges businesses face in today's competitive
                        landscape. Our team of experts is dedicated to helping you navigate the complexities of digital marketing.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        We offer services like SEO optimization, social media management, content marketing, and paid advertising.
                        Our holistic approach ensures your brand gets the visibility and engagement it deserves.
                    </p>
                </motion.div>

                {/* Right Column - List */}
                <motion.div
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-slate-800">What sets us apart?</h3>

                    <div className="space-y-4">
                        {REASONS.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <CheckCircle className="text-blue-500 shrink-0 mt-1" size={24} />
                                <p className="text-slate-700 leading-relaxed">{reason}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            Book a Free Consultation <ArrowRight className="ml-2" size={18} />
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}
