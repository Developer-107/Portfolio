import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function MenuOnMobile({
    menuOpen,
    setMenuOpen,
    navLinks,
}: {
    menuOpen: boolean;
    setMenuOpen: (value: boolean) => void;
    navLinks: any[];
}) {
    return (
        <div
            className={`fixed top-20 left-0 z-55 flex h-63 w-full flex-col gap-7 border-y border-[#a856f5] bg-black/90 px-8 pt-5 text-sm font-semibold transition-all duration-500 ease-in will-change-transform ${menuOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none -translate-x-full opacity-0'}`}
        >
            {navLinks.map((link) => (
                <ScrollLink
                    key={link.id}
                    to={link.id}
                    smooth={true}
                    duration={700}
                    spy={link.id !== 'home'}
                    offset={0}
                    activeClass={link.id !== 'home' ? 'active' : ''}
                    className="flex cursor-pointer items-center justify-between transition-colors duration-300 hover:text-[#AB47BC]"
                    onClick={() => setMenuOpen(false)}
                >
                    {link.name}
                    <ArrowRight size={17} />
                </ScrollLink>
            ))}
        </div>
    );
}
