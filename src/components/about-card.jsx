import React from 'react';
import { motion } from 'framer-motion';

const AboutCard = () => {
    const info = [
        { label: 'Secondary', value: 'JNV Birbhum' },
        { label: 'Higher Secondary', value: 'JNV Bangalore' },
        { label: 'B. Tech', value: 'NIT Karnataka' },
        { label: 'Current Organization', value: 'ICICI Bank' },
        { label: 'Current Location', value: 'Hyderabad, India' },
        { label: 'Position', value: 'Manager' },
        { label: 'Role', value: 'Application Owner' },
        // { label: 'Experience', value: '5 Years' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden flex flex-col w-full"
        >
            <div
                className="relative bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/about.jpeg')" }}
            >
                {/* Overlay a semi-transparent layer above the background image but below the content. */}
                <div className="absolute inset-0 bg-black/80"></div>

                <div className="relative z-10 flex flex-col">
                    <div className="flex flex-col px-4 pb-3">
                        <div className="text-center mb-4">
                            <p className="text-[16px] font-bold text-white pt-3">Chittaranjan Saha</p>
                            <p className="text-[12px] font-semibold text-gray-300 pt-2">.NET Full Stack Developer with React</p>
                            <p className="text-[12px] font-semibold text-gray-300">5 Years of Experience</p>
                        </div>

                        {info.map(({ label, value }) => (
                            <div key={label} className="flex flex-row text-sm text-gray-100 py-1 px-2">
                                <span className="font-bold pr-2">{label}:</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutCard;
