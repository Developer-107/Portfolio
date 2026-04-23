import { Link as ScrollLink } from 'react-scroll';

export default function MyProjectsButton() {
    return (
        <ScrollLink
            to="projects"
            smooth={true}
            duration={700}
            spy={true}
            offset={0}
            activeClass="active"
            className="group translation relative flex cursor-pointer items-center overflow-hidden rounded-full border border-[#a856f5] p-3.5 px-5.5 shadow-[#a856f5] duration-500 hover:-translate-y-1 hover:shadow-lg"
            style={{
                background: 'linear-gradient(70deg, #a751ed, #6d28d9)',
            }}
        >
            {/* sliding white layer */}
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-white transition-transform duration-500 group-hover:scale-x-100" />

            <p className="relative transition-colors duration-300 group-hover:text-[#a751ed]!">
                My projects
            </p>
        </ScrollLink>
    );
}
