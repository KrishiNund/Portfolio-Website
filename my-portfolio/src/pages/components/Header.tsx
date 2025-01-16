"use client";

import {useState} from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //toggle function
    const toggleMobileMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return(
        <header className="sticky top-0 z-50 bg-[#F8F9FA] shadow-lg">
             <nav className="flex w-screen items-center justify-between p-6">
                <a href="/" className="flex items-center space-x-12">
                    <img src="logo.png" alt="logo" className="h-10 w-auto"/>
                </a>

                {/* Desktop navigation bar */}
                <div className="hidden md:flex w-screen items-center justify-evenly">
                    <a href="#about" className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">About</a>
                    <a href="#projects" className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">Projects</a>
                    <a href="#skills" className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">Skills</a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        id="menu-btn"
                        className="focus:outline-none text-gray-700 transition duration-300 ease-in-out"
                        onClick={toggleMobileMenu}
                    >
                        {isMenuOpen ? (
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                        ) : (
                        <i className="fa-solid fa-bars fa-2xl"></i>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <ul id="mobile-menu" className="flex flex-col items-center space-y-4 py-4 bg-[#F8F9FA] shadow-md md:hidden">
                    <li><a href="#about" className="text-lg block py-2 font-semibold text-gray-700" onClick={toggleMobileMenu}>About</a></li>
                    <li><a href="#projects" className="text-lg block py-2 font-semibold text-gray-700" onClick={toggleMobileMenu}>Projects</a></li>
                    <li><a href="#skills" className="text-lg block py-2 font-semibold text-gray-700" onClick={toggleMobileMenu}>Skills</a></li>
                </ul>
            )}
        </header>
       
    );
}

export default Header;