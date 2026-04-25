export default function MenuButton({ menuOpen }: { menuOpen: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={27}
            height={27}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="square"
        >
            <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={`origin-center transition-all duration-300 ${menuOpen ? 'translate-y-[4.25px] rotate-45' : ''}`}
            />
            <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={`transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={`origin-center transition-all duration-300 ${menuOpen ? 'translate-y-[-4.25px] -rotate-45' : ''}`}
            />
        </svg>
    );
}
