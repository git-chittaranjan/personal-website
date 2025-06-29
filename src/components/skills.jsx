
import { FaCode, FaReact, FaJsSquare, FaGithub, FaGitAlt, FaProjectDiagram, FaUsersCog, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiDotnet, SiVercel, SiMysql, SiPostman, SiJirasoftware, SiDbeaver } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { TbBrandVscode, TbBinaryTree } from "react-icons/tb";

const leftSkills = [
    {
        category: "Backend",
        skills: [
            { name: "C#", icon: <FaCode /> },
            { name: "MVC", icon: <SiDotnet /> },
            { name: "Web APIs", icon: <MdApi /> },
            { name: "ADO.NET", icon: <BsDatabase /> },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "SQL Server", icon: <BsDatabase /> },
            { name: "MySQL", icon: <SiMysql /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "VS & VS Code", icon: <TbBrandVscode /> },
            { name: "SSMS", icon: <BsDatabase /> },
            { name: "DBeaver", icon: <SiDbeaver /> },
            { name: "Postman", icon: <SiPostman /> },
        ],
    },
];

const rightSkills = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: <FaReact /> },
            { name: "JavaScript", icon: <FaJsSquare /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "jQuery", icon: <MdApi /> },
        ],
    },
    {
        category: "DevOps Tools",
        skills: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Vercel", icon: <SiVercel /> },
        ],
    },
    {
        category: "Others",
        skills: [
            { name: "Project Management", icon: <SiJirasoftware /> },
            { name: "WordPress", icon: <FaWordpress /> },
            { name: "Agile (Scrum)", icon: <FaUsersCog /> },
            { name: "Design Patterns", icon: <FaProjectDiagram /> },
        ],
    },
];

export default function SkillsSection() {
    return (
        <div className="pt-30 lg:pt-30">
            
            <div
                className="relative min-h-screen bg-cover bg-center transition-all pb-10"
                style={{ backgroundImage: "url('/assets/skill.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/70"></div>

                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">

                    <div>
                        <h2 className="text-3xl font-bold text-white text-center">
                            Professional Skills
                        </h2>
                        <div className="w-66 h-1 bg-purple-500 mt-2 rounded mx-auto"></div>
                    </div>

                    <div className="mt-22 w-full max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-30">

                            {/* Left Column */}
                            <div className="flex-1 space-y-12">
                                {leftSkills.map((group) => (
                                    <div key={group.category}>
                                        <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-purple-500 pl-3">
                                            {group.category}
                                        </h3>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pl-10">
                                            {group.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="flex flex-col items-center justify-center bg-[#191f14] border-1 border-gray-500 rounded-2xl p-2 hover:bg-purple-500 transition"
                                                >
                                                    <div className="text-3xl mb-2 text-purple-400 bg-black border-2 p-3 rounded-full">
                                                        {skill.icon}
                                                    </div>
                                                    <span className="text-center text-white font-semibold text-sm">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 space-y-12">
                                {rightSkills.map((group) => (
                                    <div key={group.category}>
                                        <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-purple-500 pl-3">
                                            {group.category}
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pl-10">
                                            {group.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="flex flex-col items-center justify-center bg-[#191f14] border-1 border-gray-500 rounded-2xl p-2 hover:bg-purple-500 transition"
                                                >
                                                    <div className="text-3xl mb-2 text-purple-400 bg-black border-2 p-3 rounded-full">
                                                        {skill.icon}
                                                    </div>
                                                    <span className="text-center text-white font-semibold text-sm">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
