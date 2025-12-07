import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomeImage() {
    const slides = [
        "/assets/home-page-banners/personal-website.png",
        "/assets/home-page-banners/qr-code-generator.jpg",
        "/assets/home-page-banners/certificate-verification.jpg",
        "/assets/home-page-banners/invoice-generator.jpg",
        "/assets/home-page-banners/offers-implementation-api.png",
        "/assets/home-page-banners/login-page.jpg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden pt-8 md:pt-12 lg:pt-24 lg:pr-12">

            {/* Slider Container */}
            <div className="relative w-full h-[50%] mt-4 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-300">
                {slides.map((src, i) => (
                    <motion.img
                        key={i}
                        src={src}
                        alt="slide-img"
                        className="absolute w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === index ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                    />
                ))}


                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/70 text-white text-lg font-bold rounded-full shadow-lg hover:bg-black hover:scale-105 transition-all duration-300"
                >
                    ←
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/70 text-white text-lg font-bold rounded-full shadow-lg hover:bg-black hover:scale-105 transition-all duration-300"
                >
                    →
                </button>


                {/* Dots */}
                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/30"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>


            {/* Three Circles */}
            <div className="mt-15 flex justify-center gap-8 md:gap-12">
                {[
                    { text: "SQL", bg: "bg-yellow-900" },
                    { text: ".NET", bg: "bg-green-900" },
                    { text: "REACT", bg: "bg-red-900" },
                ].map((item, i) => (
                    <div
                        key={i}
                        className={`w-[80px] h-[80px] rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center text-white text-lg font-semibold ${item.bg} `}
                    >
                        {item.text}
                    </div>
                ))}
            </div>

        </div>
    );
}
