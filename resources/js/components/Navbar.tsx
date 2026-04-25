'use client';

import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import MenuButton from './NavbarComponents/MenuButton';
import MenuOnMobile from './NavbarComponents/MenuOnMobile';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fontSergoe fixed items-center justify-center top-0 left-0 z-50 w-full self-center transition-all duration-300 ${
                scrolled
                    ? 'bg-white/5 shadow-sm shadow-[#a856f5] backdrop-blur-[1px]'
                    : 'bg-transparent'
            }`}
        >
            <MenuOnMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} navLinks={navLinks}/>

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
                <ScrollLink
                    to="home"
                    smooth={true}
                    duration={700}
                    spy={false}
                    offset={0}
                    className="flex items-center gap-1 h-10 w-82 cursor-pointer lg:text-[22px] text-[20.5px] font-bold"
                >
                    <span className="gradient-word-effect-3">Portfolio</span>{' '}
                    Davit Khomeriki
                </ScrollLink>

                <div className="lg:flex gap-7 hidden">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.id}
                            to={link.id}
                            smooth={true}
                            duration={700}
                            spy={link.id !== "home"}
                            offset={0}
                            activeClass={link.id !== "home" ? "active" : ""}
                            className="nav-link cursor-pointer transition-colors duration-300"
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </div>

                {/* Menu Button on Mobile */}
                <div className='block lg:hidden  cursor-pointer' onClick={()=> {setMenuOpen(!menuOpen)}}>
                    <MenuButton menuOpen={menuOpen}/>
                </div>
                
            </div>
            
        </nav>
    );
}
