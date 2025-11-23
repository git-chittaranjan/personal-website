
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AvatarButton from './avatar-card';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full bg-black border-b-2 border-white fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

                {/* Left - Mobile Toggle and Name */}
                <div className="flex items-center gap-x-2">
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-gray-400 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    <a href="/" className="sm:text-xl md:text-2xl font-bold text-white">
                        Chittaranjan Saha
                    </a>
                </div>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-bold text-white">
                    <a href="/" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">Home</a>
                    <a href="#skills" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">Skills</a>
                    <a href="#about" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">About</a>
                    <a href="#experience" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">Experience</a>
                    <a href="#projects" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">Projects</a>
                    <a href="#contact" className="hover:text-black hover:bg-gray-200 px-2 py-1 rounded">Contact</a>
                </nav>



                <div className="flex items-center space-x-4 md:space-x-8 text-sm font-bold">
                    <a href="https://app.chittaranjansaha.com/" className="text-white bg-gray-800 hover:text-black hover:bg-gray-200 px-2 py-1 rounded"                    >
                        Login
                    </a>

                    <AvatarButton />
                </div>
            </div>


            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-white">
                    <a href="/" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">Home</a>
                    <a href="#skills" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">Skills</a>
                    <a href="#about" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">About</a>
                    <a href="#experience" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">Experience</a>
                    <a href="#projects" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">Projects</a>
                    <a href="#contact" className="block px-4 text-white hover:text-orange-500 active:bg-gray-600 rounded-2xl">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
