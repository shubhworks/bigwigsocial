"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/buttons/Button";
import { Home } from "@/icons/Home";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-mainBgColor">

      {/* Main container */}
      <div className="relative z-10">
        <Navbar />

        {/* Main page content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mt-32 flex flex-col justify-center items-center bg-linear-to-b">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <p className="text-3xl special md:text-6xl text-center font-bold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight antialiased">
                Page Not Found
              </p>

              <motion.p
                className="text-center mt-7 text-xl md:text-4xl font-semibold bg-linear-to-r text-black bg-clip-text leading-snug antialiased"
              >
                404: Oops! We couldn&apos;t find that page. Let&apos;s get you
                back on track.
              </motion.p>
            </motion.div>

            <div className="mt-10">
              <Link href={"/"}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => console.log("hover started!")}
                >
                  <Button
                    colorVariant="blue"
                    sizeVariant="medium"
                    text="Go to Home"
                    className="text-white bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-blue-500 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-600/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    endIcon={<Home className="size-6 " />}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}