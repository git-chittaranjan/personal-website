
import React from 'react'
import { motion } from 'framer-motion'

const Quotes = () => {
    return (
        <div className='pt-10 lg:pt-0 pb-0 lg:pb-0'>
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                    className="bg-[#242e1c] shadow-md rounded-2xl p-6 border border-gray-600"
                >
                    <blockquote className="italic text-gray-200 border-l-4 border-blue-400 pl-4">
                        “Full stack isn't just a skillset — it's a mindset of solving end-to-end problems”
                        <span className="block mt-2 text-right text-sm font-semibold text-gray-500">– Cory House</span>
                    </blockquote>
                </motion.div>
            </div>
        </div>
    )
}

export default Quotes
