export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="relative flex h-20 items-center justify-center lg:text-sm text-xs font-medium text-gray-500">
            © {year} Davit Khomeriki - Portfolio. All rights reserved.
        </div>
    );
}
