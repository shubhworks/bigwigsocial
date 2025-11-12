"use client"

import { motion } from "framer-motion"

export const Footer = () => {
    return (
        <motion.footer
            className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-extrabold mb-4">Bigwig Social</h3>
                        <p className="text-slate-400">Your trusted partner in digital marketing excellence.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-blue-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-400">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-slate-400">Email: hello@bigwigsocial.com</p>
                        <p className="text-slate-400">Phone: +1 number</p>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                    <p>&copy; 2025 Bigwig Social. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    )
}
