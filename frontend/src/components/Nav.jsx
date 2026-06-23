import React, { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const hoverVariable = "hover:bg-(--primary-color) duration-300 ease-in-out hover:opacity-90 rounded-md py-2";

    return (
        <nav className="bg-white text-(--white-color) relative py-4 px-6 md:px-12 flex justify-between md:grid md:grid-cols-3 sticky shadow-[0_1px_10px_2px_rgba(0,0,0,0.35)]">
            <img src="logo.png" alt="Logo" className="h-8" />

            <ul className="hidden md:flex gap-4 items-center md:justify-center">
                <li className='hover:text-(--primary-color)' ><a href="#">About</a></li>
                <li className='hover:text-(--primary-color)' ><a href="#">Products</a></li>
                <li className='hover:text-(--primary-color)' ><a href="#">Locations</a></li>
                <li className='hover:text-(--primary-color)' ><a href="#">Testimonials</a></li>
                <li className='hover:text-(--primary-color)' ><a href="#">Contact</a></li>
            </ul>

            <div className="hidden md:flex justify-end items-center gap-4">
                <button className="hidden md:flex bg-(--primary-color) text-(--tertiary-color) px-4 py-2 rounded-lg font-bold">Contact Us</button>
            </div>

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
                    <div className={`absolute top-full left-0 w-full bg-(--blue-color) transition-all duration-300 ease-in-out border-t border-white/10 ${isOpen ? 'opacity-100 visible max-h-60' : 'opacity-0 invisible max-h-0 overflow-hidden'} bg-white m-0 p-0`}>
                        <ul className="flex flex-col p-4 space-y-4 text-center font-medium">
                            <li>
                                <a href="#locations" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>Home</a>
                            </li>
                            <li>
                                <a href="#faq" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>About</a>
                            </li>
                            <li>
                                <a href="#about" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>Products</a>
                            </li>
                            <li>
                                <a href="#contact" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>Branches</a>
                            </li>
                            <li>
                                <a href="#contact" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact" className={`${ hoverVariable } block`} onClick={() => setIsOpen(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    )
}