import React from 'react';
import AboutCard from './about-card';

const About = () => {
    return (
        <div className="pt-30 lg:pt-40 lg:pb-10">
            <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-30">

                {/* Left Side: Title and Description */}
                <div className="flex-1 px-6">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold px-2 text-gray-200">
                            About Me
                        </h2>
                        <div className="w-39 h-1 bg-blue-600 mt-2 rounded"></div>
                    </div>

                    <div>
                        <p className='font-semibold text-lg text-gray-200 pb-2'>Hello! My name is Chittaranjan Saha</p>
                        <p className="text-gray-300 text-base md:text-base leading-relaxed">
                            I am a Software Engineer with two years of experience in Web Application Development at YES Bank Pvt. Ltd.
                            followed by three years as the Technology Owner for the Offer Management System at ICICI Bank. I have worked
                            extensively as a Full Stack Developer, contributing to end-to-end solution design, development, deployment,
                            and system enhancement.
                        </p>

                        <p className='font-bold text-sm text-gray-200 pt-6 pb-2'> AREAS OF EXPERTISE</p>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            My technical expertise spans ASP .NET, C#, JavaScript, React, SQL Server and a wide range of development tools
                            and frameworks. Over the years, I have also developed solid capabilities in team leadership, project coordination
                            and cross-functional collaboration. With experience in both development and product ownership roles, I focus on
                            building scalable and user-centric applications that meet business objectives while ensuring technical excellence.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 lg:pt-15 lg:pl-6 lg:pr-6 w-full block md:hidden lg:block">
                    <AboutCard />
                </div>
            </div>
        </div>
    );
};

export default About;