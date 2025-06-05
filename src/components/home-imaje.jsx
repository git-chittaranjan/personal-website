
import React from 'react'
import { motion } from "framer-motion";

export default function HomeImage() {
    return (
        <div>
            {/* Home Page Left: Animated Image Section */}
            <article className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ backgroundPositionX: '10%', scale: 0.95 }}
                    animate={{ backgroundPositionX: '90%', scale: 1.05 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        backgroundPositionX: { duration: 10, repeat: Infinity, ease: 'linear' },
                        scale: { duration: 0.5, ease: 'easeInOut' },
                    }}
                    style={{
                        backgroundImage: "url('/assets/home.png')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'repeat-x',
                    }}
                />

                <div className="relative z-10 w-full sm:w-[90%] md:w-[85%] aspect-[16/9] rounded-xl overflow-hidden border-2 border-red-600">
                    <img
                        src="/assets/landscape.png"
                        alt="Foreground"
                        className="w-full h-full object-cover"
                    />
                </div>
            </article>
        </div>
    )
}
