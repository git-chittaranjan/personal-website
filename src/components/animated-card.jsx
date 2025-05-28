import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Motion variants declared outside for performance
const getVariants = (direction) => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? 50 : 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
});

const AnimatedCard = ({ exp = {}, direction = "left" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = useMemo(() => getVariants(direction), [direction]);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
                scale: 1.1
            }}
            className="w-full max-w-md p-4 rounded-lg border-4 shadow-md bg-[#191f14] border-cyan-600 transition-all duration-1000 hover:border-orange-500"
        >
            <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{exp.icon}</div>
                <div>
                    <h3 className="text-xl font-semibold text-orange-500">{exp.title}</h3>
                    <p className="text-white font-semibold pt-3">{exp.company}</p>
                    <span className="text-sm font-semibold text-cyan-500">{exp.date}</span>
                    <p className="text-gray-400 pt-3">{exp.details}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimatedCard;
