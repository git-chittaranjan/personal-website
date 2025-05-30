import React from 'react';
import AboutCard from './about-card';

const About = () => {
    return (
        <div className=" pt-10 lg:pt-20 pb-10 lg:pb-20">
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
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            I am a Software Engineer with two years of experience in Web
                            Application Development at YES Bank Pvt. Ltd. and an additional
                            three years of experience serving as the Technology Owner for the
                            Offer Management System.
                        </p>

                        <p className='font-bold text-sm text-gray-200 pt-6 pb-2'> AREAS OF EXPERTISE</p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            Worked as a Full Stack Developer.
                            Expertise in Database, .NET and various types
                            of Tools and  Programming Languages with strong
                            capabilities in both team leadership and project management.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 lg:pt-15 lg:pl-6 lg:pr-6 w-full">
                    <AboutCard />
                </div>
            </div>
        </div>
    );
};

export default About;