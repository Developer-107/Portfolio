import { Link as ScrollLink } from 'react-scroll';

export default function ToAboutChevron() {
    return (
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">
            <ScrollLink
                to="about"
                smooth={true}
                duration={700}
                spy={true}
                offset={0}
                activeClass="active"
                className="cursor-pointer transition-colors duration-300 text-gray-400 hover:text-[#AB47BC]"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </ScrollLink>
        </div>
    );
}
