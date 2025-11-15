'use client';
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck, Target } from "lucide-react";
import TypingText from "../TypingText";

import { Users } from "@/icons/Users";
import { Calendar } from "@/icons/Calendar";
import { Heart } from "@/icons/Heart";
import { Trending } from "@/icons/Trending";
import HeroBtn1 from "../ui/buttons/Hero_01";
import HeroBtn2 from "../ui/buttons/Hero_02";


// Animation variants used by framer-motion sections
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export const HomeLanding = () => {
    return (
        <div className="relative min-h-screen bg-mainBgColor font-special">
            {/* Skip to content link for screen readers */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
            >
                Skip to main content
            </a>

            {/* Background Animated Circles */}
            <div
                className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
                aria-hidden="true"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                    className="absolute animate-pulse bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-cyan-300 blur-[80px] md:blur-[150px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1.2 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute animate-pulse top-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-red-400/40 blur-[60px] md:blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.4 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute animate-pulse top-1/2 left-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-white/40 blur-[50px] md:blur-[100px] transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>

            {/* Main container */}
            <div className="relative z-10">
                <Navbar />

                {/* Main page content */}
                <main id="main-content" className="container mx-auto px-4 sm:px-6 lg:px-8">

                    {/* --- HERO SECTION --- */}

                    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/video-poster.jpg" // Add a poster frame for better loading
                            >
                                <source src="/bigwigBgVideo.mp4" type="video/mp4" />
                                {/* <source src="/hero-video.webm" type="video/webm" /> */}
                                {/* Fallback image if video doesn't load */}
                                <div className="absolute inset-0 bg-linear-to-r from-purple-900 via-pink-800 to-red-900"></div>
                            </video>

                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                        </div>

                        {/* Content */}
                        <motion.section
                            className="flex flex-col items-center justify-center text-center relative z-10 px-4 sm:px-6 lg:px-8 py-20"
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                className="font-special font-extrabold text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-tight"
                                variants={fadeIn}
                            >
                                <span className="text-[#F4F4F4] flex md:inline-block justify-center backdrop-blur-md cursor-default bg-black rounded-3xl p-4">
                                    <TypingText
                                        text="Turns Your Brand"
                                        typeSpeed={100}
                                    />
                                </span>

                                <div className="bg-cyan-200 animate-pulse p-3 rounded-full text-black">
                                    INTO A LEGACY
                                </div>
                            </motion.h1>

                            <motion.p
                                className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
                                variants={fadeIn}
                            >
                                <span className="bg-linear-to-r text-2xl md:text-4xl text-center font-extrabold from-white via-cyan-400 to-white bg-clip-text text-transparent decoration-black cursor-pointer hover:underline">
                                    <TypingText text="A Digital Marketing Agency that boosts your brand with expert social media management." />
                                </span>
                            </motion.p>

                            <motion.div
                                variants={fadeIn}
                                className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
                            >
                                <HeroBtn1 text="Let's Talk" />
                                {/* <button className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-xl hover:from-purple-600 hover:to-pink-600 text-lg">
                                    Let's Talk
                                </button> */}

                                <HeroBtn1 text="View Portfolio" />
                            </motion.div>
                        </motion.section>

                        {/* Scroll indicator */}
                        <motion.div
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                        >
                            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                                <motion.div
                                    className="w-1 h-3 bg-white rounded-full mt-2"
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* --- ABOUT US SECTION --- */}
                    <motion.section
                        id="about"
                        className="py-20 lg:py-28 bg-linear-to-br "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                {/* Left Content */}
                                <motion.div
                                    className="space-y-6"
                                    variants={fadeIn}
                                >
                                    <div className="space-y-2">
                                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                                            About Our Agency
                                        </span>
                                        <h2 className="font-special font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                                            We Build Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Legacies</span>
                                        </h2>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            At <span className="font-semibold text-blue-600">Bigwig Social</span>, we transform businesses by crafting powerful online identities and forging meaningful connections with your target audience.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Our tailored strategies and cutting-edge tools are designed to drive engagement, boost traffic, and deliver sustainable organic growth that stands the test of time.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <HeroBtn2 text="Learn More"/>
                                    </div>
                                </motion.div>

                                {/* Right Stats Grid */}
                                <motion.div
                                    className="grid grid-cols-2 gap-6"
                                    variants={staggerContainer}
                                >
                                    {/* Stat 1 */}
                                    <motion.div
                                        variants={fadeIn}
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 group"
                                    >
                                        <div className="text-center space-y-3">
                                            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <Users className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-4xl font-bold text-gray-900">100+</h3>
                                            <p className="text-gray-600 font-medium">Clients Served</p>
                                        </div>
                                    </motion.div>

                                    {/* Stat 2 */}
                                    <motion.div
                                        variants={fadeIn}
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 group"
                                    >
                                        <div className="text-center space-y-3">
                                            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <Calendar className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-4xl font-bold text-gray-900">5+</h3>
                                            <p className="text-gray-600 font-medium">Years Experience</p>
                                        </div>
                                    </motion.div>

                                    {/* Stat 3 */}
                                    <motion.div
                                        variants={fadeIn}
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 group col-span-2"
                                    >
                                        <div className="text-center space-y-3">
                                            <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <Heart className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-4xl font-bold text-gray-900">98%</h3>
                                            <p className="text-gray-600 font-medium">Client Retention</p>
                                        </div>
                                    </motion.div>

                                    {/* Stat 4 - Additional for better layout */}
                                    <motion.div
                                        variants={fadeIn}
                                        className="bg-linear-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group col-span-2"
                                    >
                                        <div className="text-center space-y-3">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                                <Trending className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-4xl font-bold text-white">3x</h3>
                                            <p className="text-white/90 font-medium">Average Growth</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* --- SERVICES INTRO SECTION --- */}
                    <motion.section
                        id="services"
                        className="py-24 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeIn}
                    >
                        <h2 className="text-base font-semibold text-purple-400 uppercase tracking-wider">
                            Our Digital Marketing Services
                        </h2>
                        <p className="font-special font-bold text-4xl md:text-6xl mt-4">
                            Build Credibility, Drive Growth
                        </p>
                        <button className="mt-10 px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                            Explore Our Services
                        </button>
                    </motion.section>

                    {/* --- WHY US SECTION --- */}
                    <motion.section
                        className="py-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto">
                            <h2 className="text-base font-semibold text-purple-400 uppercase tracking-wider">
                                Why Bigwig Social?
                            </h2>
                            <p className="font-special font-bold text-4xl md:text-5xl mt-4">
                                What Sets Us Apart?
                            </p>
                            <p className="text-lg text-gray-300 mt-6">
                                Our purpose is not to just deliver what you ask; we provide what your business truly requires. We offer SEO, SMM, PPC, video production, and branding solutions customized for you.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                            variants={staggerContainer}
                        >
                            {/* Card 1 */}
                            <motion.div
                                variants={fadeIn}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 mb-6">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Personalized Strategies</h3>
                                <p className="text-gray-300">
                                    We don't do one-size-fits-all. We deliver personalized strategies and data-driven results.
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                variants={fadeIn}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 mb-6">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Honest & Ethical</h3>
                                <p className="text-gray-300">
                                    Our business is built on honest, ethical, and transparent practices. No fluff, just results.
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                variants={fadeIn}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 mb-6">
                                    <BarChart3 className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Solutions for All Sizes</h3>
                                <p className="text-gray-300">
                                    We provide effective marketing solutions for businesses of all sizes, from startups to enterprises.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.section>

                </main>
            </div>
        </div>
    )
}