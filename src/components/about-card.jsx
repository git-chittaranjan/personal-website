import React from 'react';
import { motion } from 'framer-motion';

const AboutCard = () => {
    const info = [
        { label: 'Primary Skills', value: 'ASP.NET Core, SQL Server, React' },
        { label: 'Domain Expertise', value: 'Banking Technologies, Marketing Technologies' },
        { label: 'Key Responsibilities', value: 'Solution Design, Application Ownership' },
        { label: 'Current Organization', value: 'ICICI Bank, Hyderabad, India' },
        { label: 'Graduation', value: 'National Institute of Technology, Karnataka' },
        { label: 'Certifications', value: 'Full Stack Developer, Scrum Master, AEP' },
        { label: 'Strengths', value: 'Problem solving, Ownership Mindset, Attention to Detail' },
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
                style={{ backgroundImage: "url('/assets/about.jpg')" }}
            >
                {/* Overlay a semi-transparent layer above the background image but below the content. */}
                <div className="absolute inset-0 bg-black/75"></div>

                <div className="relative z-10 flex flex-col">
                    <div className="flex flex-col px-4 pb-6 overflow-x-auto whitespace-nowrap">
                        <div className="text-center mb-4">
                            <p className="text-[16px] font-bold text-white pt-3">Chittaranjan Saha</p>
                            <p className="text-[12px] font-semibold text-gray-300 pt-2">.NET Full Stack Developer with React</p>
                            <p className="text-[12px] font-semibold text-gray-300">5 Years of Experience</p>
                        </div>

                        {info.map(({ label, value }) => (
                            <div key={label} className="flex flex-row text-sm text-gray-300 py-1 px-2">
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
