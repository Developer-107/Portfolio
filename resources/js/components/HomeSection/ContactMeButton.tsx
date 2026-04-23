import { Link as ScrollLink } from 'react-scroll';

export default function ContactMeButton() {
    return (
        <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            spy={true}
            offset={0}
            activeClass="active"
            className="group translation relative flex cursor-pointer items-center overflow-hidden rounded-full border border-[#a856f5] p-1 px-2 shadow-[#a856f5] duration-500 hover:-translate-y-1 hover:shadow-lg"
            style={{
                background: 'linear-gradient(20deg, #a751ed, #6d28d9)',
            }}
        >
            {/* sliding white layer */}
            <span className="absolute inset-0 origin-right scale-x-0 rounded-full bg-white transition-transform duration-500 group-hover:scale-x-100" />

            {/* content */}
            <div className="relative flex items-center gap-2 rounded-full transition duration-300">
                <p className="pl-4.5 transition-colors duration-300 group-hover:text-[#a751ed]">
                    Contact Me
                </p>

                <div className="rounded-full bg-white p-2.5 text-[#a751ed]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone-icon lucide-phone rotate-y-180"
                    >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                </div>
            </div>
        </ScrollLink>
    );
}
