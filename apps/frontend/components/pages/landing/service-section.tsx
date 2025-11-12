"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/buttons/button"
import { Card, CardContent } from "@/components/ui/cards/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const SERVICES = [
  { title: "Social Media Marketing", icon: "📱" },
  { title: "Content Creation & Marketing", icon: "✍️" },
  { title: "Performance Marketing", icon: "📊" },
  { title: "Website Development", icon: "🌐" },
]

export const ServicesSection = () => {
  return (
    <motion.section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-balance">
            Our Digital Marketing Services
          </h2>
          <p className="text-lg text-slate-600 mt-4">Build Credibility, Drive Growth</p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="aspect-video w-full bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center border border-blue-100">
                    <p className="text-slate-400 text-xs">Service Image</p>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {SERVICES.map((service) => (
                <CarouselItem key={service.title} className="md:basis-1/2">
                  <Card className="border-blue-100">
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="aspect-video w-full bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center border border-blue-100">
                        <p className="text-slate-400 text-xs">Service Image</p>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800">{service.title}</h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent">
            Know More <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
