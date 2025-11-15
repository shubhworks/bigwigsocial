"use client"

import { toast } from "react-hot-toast";
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation";
import { Github } from "@/icons/Github"
import { Down } from "@/icons/Down"
import { MenuBars } from "@/icons/MenuBars"
import { Button } from "./ui/buttons/Button"
import { CloseCircle } from "@/icons/CloseCircle";
import { Bag } from "@/icons/Bag";
import NavBtn from "./ui/buttons/NavBtn";

export const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
    const [isMobileSectorsOpen, setIsMobileSectorsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Close mobile menu when window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    const handleMouseEnter = (dropdown: string) => {
        setHoveredDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setHoveredDropdown(null);
    };

    const closeAllDropdowns = () => {
        setActiveDropdown(null)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsMobileServicesOpen(false)
        setIsMobileSectorsOpen(false)
    }

    // Check if current path is active
    const isActivePath = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    // Nav item styles
    const getNavItemStyles = (path: string) => {
        const isActive = isActivePath(path);
        return `inline-flex h-9 w-max items-center justify-center rounded-md px-3 xl:px-4 py-2 text-base xl:text-lg font-medium transition-all duration-300 ${isActive
            ? 'bg-blue-600 text-white shadow-md scale-105'
            : 'bg-white text-gray-900 hover:bg-blue-50 hover:text-blue-700 hover:scale-105'
            }`;
    };

    return (
        <>
            <header className="top-0 z-50 w-full px-2 sm:px-4 sticky">
                <nav className="mx-auto max-w-7xl rounded-xl sm:rounded-full border border-gray-200 bg-white/90 backdrop-blur-md shadow-lg">
                    <div className="flex h-16 sm:h-24 items-center justify-between px-4 sm:px-6">
                        {/* Logo */}
                        <Link href={"/"} className="shrink-0" onClick={closeAllDropdowns}>
                            <Image
                                src={"/bigwigLogo.png"}
                                alt="logo"
                                width={140}
                                height={50}
                                className="hover:scale-105 transition-scale duration-300"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6" ref={dropdownRef}>
                            <div className="flex items-center space-x-2 xl:space-x-3">
                                <Link
                                    href="/"
                                    className={getNavItemStyles('/')}
                                    onClick={closeAllDropdowns}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/about"
                                    className={getNavItemStyles('/about')}
                                    onClick={closeAllDropdowns}
                                >
                                    About
                                </Link>

                                {/* Services Dropdown */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter("services")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        onClick={() => toggleDropdown("services")}
                                        className={`inline-flex h-9 w-max items-center justify-center rounded-md px-3 xl:px-4 py-2 text-base xl:text-lg font-medium transition-all duration-300 ${isActivePath('/services')
                                            ? 'bg-blue-600 text-white shadow-md scale-105'
                                            : 'bg-white text-gray-900 hover:bg-blue-50 hover:text-blue-700 hover:scale-105'
                                            }`}
                                    >
                                        <span>Services</span>
                                        <Down className={`size-4 xl:size-5 ml-1 transition-transform duration-200 ${(activeDropdown === "services" || hoveredDropdown === "services") ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                    <div className={`absolute top-full left-0 w-64 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-lg shadow-xl p-3 space-y-2 z-50 origin-top-left transition-all duration-200 ease-in-out
                                        ${(activeDropdown === "services" || hoveredDropdown === "services")
                                            ? 'transform opacity-100 scale-100'
                                            : 'transform opacity-0 scale-95 pointer-events-none'
                                        }`}
                                    >
                                        {[
                                            { title: "Social Media Marketing" },
                                            { title: "Content Creation" },
                                            { title: "Performance Marketing" },
                                            { title: "Website Development" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="block cursor-pointer border-2 border-transparent hover:border-blue-200 select-none space-y-1 rounded-lg p-3 transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] group"
                                            >
                                                <div className="font-semibold text-gray-800 text-center group-hover:text-blue-700 transition-colors">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Sectors Dropdown */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter("sectors")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        onClick={() => toggleDropdown("sectors")}
                                        className={`inline-flex h-9 w-max items-center justify-center rounded-md px-3 xl:px-4 py-2 text-base xl:text-lg font-medium transition-all duration-300 ${isActivePath('/sectors')
                                            ? 'bg-blue-600 text-white shadow-md scale-105'
                                            : 'bg-white text-gray-900 hover:bg-blue-50 hover:text-blue-700 hover:scale-105'
                                            }`}
                                    >
                                        <span>Sectors</span>
                                        <Down className={`size-4 xl:size-5 ml-1 transition-transform duration-200 ${(activeDropdown === "sectors" || hoveredDropdown === "sectors") ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                    <div className={`absolute top-full left-0 w-60 rounded-xl border border-gray-200 bg-white/95 backdrop-blur-lg shadow-xl p-3 space-y-2 z-50 origin-top-left transition-all duration-200 ease-in-out
                                        ${(activeDropdown === "sectors" || hoveredDropdown === "sectors")
                                            ? 'transform opacity-100 scale-100'
                                            : 'transform opacity-0 scale-95 pointer-events-none'
                                        }`}
                                    >
                                        {[
                                            { title: "Education" },
                                            { title: "Hospitality" },
                                            { title: "FMCG" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="block cursor-pointer border-2 border-transparent hover:border-blue-200 select-none space-y-1 rounded-lg p-3 transition-all duration-200 hover:bg-blue-50 hover:scale-[1.02] group"
                                            >
                                                <div className="font-semibold text-gray-800 text-center group-hover:text-blue-700 transition-colors">
                                                    {item.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/blog"
                                    className={getNavItemStyles('/blog')}
                                    onClick={closeAllDropdowns}
                                >
                                    Blog
                                </Link>

                                <Link
                                    href="/contact-us"
                                    className={getNavItemStyles('/contact-us')}
                                    onClick={closeAllDropdowns}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <NavBtn />
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center space-x-3 lg:hidden">
                            <Link
                                href="https://github.com/Shubhashish-Chakraborty/prepnerdz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                            >
                                <Github className="size-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>

                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors touch-manipulation"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <CloseCircle className="size-5" /> : <MenuBars className="size-5" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={closeMobileMenu} aria-hidden="true" />
                    <div className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-md border-l border-gray-200 shadow-2xl overflow-y-auto">
                        <div className="flex flex-col p-6 pt-20 space-y-4">
                            {/* Close button */}
                            <button
                                onClick={closeMobileMenu}
                                className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                                aria-label="Close menu"
                            >
                                <CloseCircle className="size-5" />
                            </button>

                            <Link
                                href="/"
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/')
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/about')
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>

                            {/* Mobile Services Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    className={`flex items-center justify-between w-full text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/services')
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                        }`}
                                >
                                    Services
                                    <div
                                        className={`transform transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                                    >
                                        <Down className="size-5" />
                                    </div>
                                </button>
                                {isMobileServicesOpen && (
                                    <div className="mt-2 space-y-2 pl-6 border-l-2 border-gray-200">
                                        {[
                                            { title: "Social Media Marketing" },
                                            { title: "Content Creation" },
                                            { title: "Performance Marketing" },
                                            { title: "Website Development" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 touch-manipulation font-medium"
                                            >
                                                {item.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Sectors Dropdown */}
                            <div>
                                <button
                                    onClick={() => setIsMobileSectorsOpen(!isMobileSectorsOpen)}
                                    className={`flex items-center justify-between w-full text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/sectors')
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                        }`}
                                >
                                    Sectors
                                    <div className={`transform transition-transform duration-200 ${isMobileSectorsOpen ? "rotate-180" : ""}`}>
                                        <Down className="size-5" />
                                    </div>
                                </button>
                                {isMobileSectorsOpen && (
                                    <div className="mt-2 space-y-2 pl-6 border-l-2 border-gray-200">
                                        {[
                                            { title: "Education" },
                                            { title: "Hospitality" },
                                            { title: "FMCG" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 touch-manipulation font-medium"
                                            >
                                                {item.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/blog"
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/blog')
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Blog
                            </Link>

                            <Link
                                href="/contact-us"
                                className={`text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 touch-manipulation ${isActivePath('/contact-us')
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </Link>

                            {/* Mobile Auth Section */}
                            <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                                <div className="px-4">
                                    <NavBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar