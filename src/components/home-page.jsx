
import { motion } from "framer-motion";
import DownloadPDFButton from "./resume-download";

const HomePage = () => {
    return (
        <div className="pb-10 bg-black">
            <div className="min-h-[85vh] flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-8xl w-full">

                    <div className="relative w-full min-h-[40vh] md:min-h-[60vh] lg:min-h-[80vh] overflow-hidden">
                        {/* Background GIF */}
                        <div className="absolute inset-0 z-10">
                            <img
                                src="/assets/home.gif"
                                alt="Background"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Foreground Image */}
                        <div className="relative z-20 flex justify-center items-center h-full">
                            <div className="group transition duration-300 ease-in-out transform hover:scale-120">
                                <img
                                    src="/assets/landscape.png"
                                    alt="My Image"
                                    className="w-50 h-50 sm:w-65 sm:h-65 md:w-75 md:h-75 lg:w-80 lg:h-80 rounded-full border-4 border-yellow-400 shadow-lg group-hover:ring-4 group-hover:ring-cyan-600 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Optional overlay for better contrast */}
                        <div className="absolute inset-0 bg-black bg-opacity-30 z-5" />
                    </div>


                    {/* Right: Text Content Section */}
                    <article className="flex flex-col justify-center text-gray-300 lg:p-6">
                        <h1 className="text-3xl font-bold mb-4">Welcome to my Portfolio!</h1>

                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
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
