import React, { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-(--blue-color) text-(--white-color) relative py-4 px-6 md:px-12 flex justify-between sticky">
            <img src="logo.png" alt="Logo" className="h-8" />

            <ul className="hidden md:flex gap-4 items-center">
                <li><a href="#">Locations</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About Us</a></li>
            </ul>

            <button className="hidden md:flex bg-(--white-color) text-(--blue-color) px-4 py-2 rounded-lg font-bold">Contact Us</button>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            >
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full md:hidden">
                    <div className={`absolute top-full left-0 w-full bg-(--blue-color) transition-all duration-300 ease-in-out border-t border-white/10 ${isOpen ? 'opacity-100 visible max-h-60' : 'opacity-0 invisible max-h-0 overflow-hidden'}`}>
                        <ul className="flex flex-col p-4 space-y-4 text-center font-medium">
                            <li>
                                <a href="#locations" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Locations</a>
                            </li>
                            <li>
                                <a href="#faq" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>FAQ</a>
                            </li>
                            <li>
                                <a href="#about" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>About Us</a>
                            </li>
                            <li>
                                <a href="#contact" className="block hover:opacity-80" onClick={() => setIsOpen(false)}>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}