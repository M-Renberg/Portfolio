

import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id="main-footer" className="w-full py-6 text-center text-xs font-mono text-[#408A71]">
            <p>Portfolio of Mikael Renberg 2026</p>
            <NavLink to="/contact" className="hover:text-[#2DD4BF] transition-colors underline underline-offset-4 mt-1 inline-block">
                Contact me
            </NavLink>
        </footer>
    );
}