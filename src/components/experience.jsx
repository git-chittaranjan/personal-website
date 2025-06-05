
import { FileJson, BugOff, GraduationCap, School, NotebookPen } from "lucide-react";
import AnimatedCard from "./animated-card";

const experiences = [
    {
        side: "left",
        title: "DigiTech - Application Owner",
        company: "ICICI Bank Limited",
        date: "April, 2022 - Present",
        details: "Application Owner and Project Lead for Bank's Offer Management System. Enabled seamless offer management for customers through robust API integrations with key banking channels, including the iMobile Pay app and Net Banking platform. Led end-to-end solutioning, execution, and project management activities.",
        icon: <FileJson className="text-amber-400" />,
    },
    {
        side: "right",
        title: "Full Stack Developer",
        company: "Atyati Technologies",
        date: "July, 2020 - April, 2022",
        details: "Worked as a Full Stack Developer on a .NET-based net banking application for Yes Bank. Resolved 40+ critical bugs requiring strong expertise in both frontend and backend technologies. Actively contributed to the core development of application features and database reports.",
        icon: <BugOff className="text-pink-500" />,
    },
    {
        side: "left",
        title: "Graduation (B. Tech)",
        company: "National Institute of Technology, Karnataka",
        date: "July, 2016 - April, 2020",
        details: "Gained a strong foundation in computer science principles, including data structures, algorithms, databases, operating systems, computer networks, and software engineering. Developed practical skills through projects and coursework in programming, web development and system design.",
        icon: <GraduationCap className="text-rose-800" />,
    },
    {
        side: "right",
        title: "Higher Secondary (12th)",
        company: "Jawahar Navodaya Vidyalaya, Bangalore",
        date: "June, 2014 - April, 2016",
        details: "Completed Higher Secondary education with a focus on Physics, Chemistry, and Mathematics, building a strong foundation in analytical thinking and problem-solving. Qualified in KVPY and JEE examinations.",
        icon: <NotebookPen className="text-yellow-600" />,
    },
    {
        side: "left",
        title: "Secondary (10th)",
        company: "Jawahar Navodaya Vidyalaya, Birbhum",
        date: "June, 2009 - April, 2014",
        details: "Completed secondary education under the CBSE curriculum with a strong academic foundation at JNV, emphasizing discipline and holistic development. Qualified in Dakshana examinations.",
        icon: <School className="text-lime-400" />,
    },
];

const ExperienceTree = () => {
    return (
        <div className="pt-30 lg:pt-30">
            <div
                className="relative min-h-screen bg-cover bg-center ransition-all"
                style={{ backgroundImage: "url('/assets/experience.jpg')" }}
            >
                {/* Overlay a semi-transparent layer above the background image but below the content. */}
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 min-h-screen flex flex-col md:pb-20" >

                    <div className="flex justify-center pt-15">
                        <div className="text-right">
                            <h2 className="text-3xl font-bold text-white pr-2">
                                Experiences
                            </h2>
                            <div className="w-45 h-1 bg-orange-500 mt-2 rounded ml-auto"></div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className="text-gray-200 text-sm font-semibold mt-8 mb-8 text-center lg:px-60 pt-4 lg:pt-0">
                                Full Stack Developer with expertise in databases, .NET, React, and a wide range of tools and programming languages.
                                Skilled in team leadership and project management, with strong experience in debugging and error analysis.
                            </p>
                        </div>
                        {/* Arrow on Top of the Vertical Line */}
                        <div className="absolute top-68 md:top-58 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="w-0 h-0 border-l-16 border-r-16 border-b-16 border-l-transparent border-r-transparent border-b-orange-500" />
                        </div>
                        {/* Vertical Timeline Line */}
                        <div
                            className="absolute md:top-60 left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 z-0"
                            style={{ height: 'calc(100% - 24rem)' }}
                        />
                    </div>

                    <div className="flex flex-col space-y-8 pt-20 md:pt-25">
                        {experiences.map((exp, idx) => {
                            const isLeft = exp.side === "left";

                            return (
                                <div
                                    key={idx}
                                    className={`relative flex flex-col md:flex-row items-center md:items-start ${isLeft ? "md:justify-start" : "md:justify-end"
                                        } w-full`}
                                >
                                    {/* Left Side (Desktop) */}
                                    {isLeft && (
                                        <div className="hidden md:flex w-1/2 justify-end pr-16 relative z-20">
                                            <AnimatedCard exp={exp} direction="left" />
                                        </div>
                                    )}

                                    {/* Timeline Dot */}
                                    <div className="w-5 h-5 rounded-full bg-cyan-500 border-4 border-white z-20 shadow-yellow-300 shadow-[0_0_10px_4px_rgba(59,130,246,0.7)]" />

                                    {/* Right Side (Desktop) */}
                                    {!isLeft && (
                                        <div className="hidden md:flex w-1/2 justify-start pl-16 relative z-20">
                                            <AnimatedCard exp={exp} direction="right" />
                                        </div>
                                    )}

                                    {/* Mobile View - Full Width Card */}
                                    <div className="md:hidden w-full mt-4 relative z-20">
                                        <AnimatedCard exp={exp} direction="up" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceTree;
