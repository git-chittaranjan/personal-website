
import { motion } from "framer-motion";
import DownloadPDFButton from "./resume-download";

const HomePage = () => {
    return (
        <div className="pb-10">
            <div className="min-h-[85vh] flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-8xl w-full">

                    {/* Left: Animated Image Section */}
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

                    {/* Right: Text Content Section */}
                    <article className="flex flex-col justify-center text-gray-300">
                        <h1 className="text-3xl font-bold mb-4">Welcome to my Portfolio!</h1>

                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            Experienced Full Stack Developer with a strong background in designing and developing scalable web applications across front-end and back-end technologies.
                            <br />
                            Design-focused and detail-oriented software engineer with a passion for crafting elegant code and intuitive user experiences.
                        </p>

                        <div>
                            <h2 className="font-semibold mb-2">Key Skills:</h2>
                            <ul className="text-sm list-disc list-inside space-y-1">
                                <li><strong>Backend:</strong> C#, ASP.NET Core MVC, Web API, Entity Framework, ADO.NET</li>
                                <li><strong>Frontend:</strong> React, JavaScript, Tailwind, Ajax, jQuery, HTML5, CSS3</li>
                                <li><strong>Database:</strong> SQL Server, MySQL</li>
                                <li><strong>DevOps Tools:</strong> Git & GitHub, Vercel</li>
                                <li><strong>Architecture:</strong> RESTful APIs, MVC, Clean Architecture</li>
                                <li><strong>Methodologies:</strong> Agile (Scrum), SOLID principles, Design Patterns</li>
                                <li><strong>Tools:</strong> VS Code, VS 2022, SSMS, SSRS, DBeaver, Postman, Chrome DevTools, JIRA</li>
                                <li><strong>Others:</strong> Project Management, Team Lead, Debugging, Use of AI, Data Structure</li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-center pt-14">
                            <DownloadPDFButton />
                        </div>
                    </article>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
