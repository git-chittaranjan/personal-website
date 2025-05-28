
import { motion } from "framer-motion"

export default function DownloadPDFButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/resume.pdf';
        link.download = 'Chittaranjan_Saha_Resume.pdf'; // Name of the file for download
        link.click();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="border border-gray-200 rounded-3xl inline-block"
        >
            <button
                onClick={handleDownload}
                className="bg-[#263618] text-white font-semibold px-6 py-2 rounded-3xl shadow-md hover:bg-[#0e130a] transition duration-300"
            >
                Download Resume
            </button>
        </motion.div>
    );
}