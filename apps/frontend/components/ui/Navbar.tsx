"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/buttons/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const SERVICES = ["Social Media Marketing", "Website Development", "Content Creation", "Performance Marketing"]
const SECTORS = ["Education", "Hospitality", "FMCG"]
const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
]

export const Navbar = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div className="text-2xl font-extrabold text-slate-800" whileHover={{ scale: 1.05 }}>
                        Bigwig Social
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.slice(0, 2).map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href ? "text-blue-500 font-semibold" : "text-slate-700 hover:text-blue-500"
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="text-sm font-medium text-slate-700 hover:text-blue-500 flex items-center gap-1">
                                    Services
                                    <ChevronDown size={16} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {SERVICES.map((service) => (
                                    <DropdownMenuItem key={service}>{service}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Sectors Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="text-sm font-medium text-slate-700 hover:text-blue-500 flex items-center gap-1">
                                    Sectors
                                    <ChevronDown size={16} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {SECTORS.map((sector) => (
                                    <DropdownMenuItem key={sector}>{sector}</DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {NAV_LINKS.slice(2).map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${pathname === link.href ? "text-blue-500 font-semibold" : "text-slate-700 hover:text-blue-500"
                                    }`}
                                whileHover={{ y: -2 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        <Button className="bg-blue-500 hover:bg-blue-600">Portfolio</Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button className="p-2">
                                    <Menu size={24} className="text-slate-800" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-4 mt-8">
                                    {NAV_LINKS.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="text-lg font-medium text-slate-700 hover:text-blue-500"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <div className="border-t pt-4">
                                        <h3 className="font-semibold text-slate-800 mb-2">Services</h3>
                                        {SERVICES.map((service) => (
                                            <a
                                                key={service}
                                                href="#"
                                                className="block text-sm text-slate-600 hover:text-blue-500 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {service}
                                            </a>
                                        ))}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-2">Sectors</h3>
                                        {SECTORS.map((sector) => (
                                            <a
                                                key={sector}
                                                href="#"
                                                className="block text-sm text-slate-600 hover:text-blue-500 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {sector}
                                            </a>
                                        ))}
                                    </div>
                                    <Button className="w-full bg-blue-500 hover:bg-blue-600 mt-4">Portfolio</Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}
