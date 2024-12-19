"use client";

import {useState} from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //toggle function
    const toggleMobileMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return(
        <header className="border-[#212529] border-b-2">
             <nav className="flex w-screen items-center justify-between p-6">
                <a href="/">
                    <img src="logo.png" alt="logo" className="h-10 w-auto"/>
                </a>

                {/* Desktop navigation bar */}
                <div className="hidden md:flex w-screen items-center justify-evenly">
                    <a href="#about" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">About</a>
                    <a href="#projects" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Projects</a>
                    <a href="#skills" className="text-lg font-semibold leading-6 text-gray-900 hover:underline underline-offset-2">Skills</a>
                </div>

                {/* Mobile hamburger menu */}
                <div className="md:hidden">
                    <button id="menu-btn" className="focus:outline-none" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-bars fa-2xl"></i>
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <ul id="mobile-menu" className="flex-col items-center text-center border-[#212529] border-t-2 md:hidden">
                    <li><a href="#about" className="block py-2 font-semibold" onClick={toggleMobileMenu}>About</a></li>
                    <li><a href="#projects" className="block py-2 font-semibold" onClick={toggleMobileMenu}>Projects</a></li>
                    <li><a href="#skills" className="block py-2 font-semibold" onClick={toggleMobileMenu}>Skills</a></li>
                </ul>
            )}
        </header>
       
    );
}

export default Header;