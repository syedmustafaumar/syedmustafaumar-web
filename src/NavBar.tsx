import React, { useState, useEffect, useCallback } from 'react';
import './NavBar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [shadowStyle, setShadowStyle] = useState<React.CSSProperties>({});

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            setShadowStyle({
                boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'box-shadow 0.5s ease-in-out',
            });
        } else {
            setShadowStyle({
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
                transition: 'box-shadow 0.5s ease-in-out',
            });
        }
    };

    useEffect(() => {
        AOS.init({ duration: 500 });
        setIsClient(true);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav
            className="fixed top-0 left-0 right-0 p-5 text-purple-400 z-10 bg-customBlack"
            style={shadowStyle}
        >
            <div className="flex items-center justify-between">
                <div data-aos="fade-right" data-aos-delay="100" className="text-3xl font-jetbrains font-semibold">SMU.</div>

                {/* Hamburger Menu Button for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-purple-400 hover:text-white focus:outline-none z-30 absolute top-5 right-5">
                        {isOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu Links */}
                <div
                    className={`nav-menu fixed md:static inset-y-0 md:inset-y-auto right-0 md:right-auto w-64 md:w-auto bg-neutral-900 md:bg-transparent p-5 md:p-0 z-20 flex flex-col md:flex-row md:items-center md:space-x-4
                    ${isClient && (isOpen ? 'translate-x-0' : 'translate-x-full')} md:translate-x-0`}>
                    <a href="#about" data-aos="fade-down" data-aos-delay="100" className="nav-link nav-link--mt">About</a>
                    <a href="#experience" data-aos="fade-up" data-aos-delay="200" className="nav-link">Experience</a>
                    <a href="#projects" data-aos="fade-down" data-aos-delay="300" className="nav-link">Projects</a>
                    <a href="#contact" data-aos="fade-up" data-aos-delay="400" className="nav-link">Contact</a>
                    <a href="#resume" data-aos="fade-left" data-aos-delay="500" className="nav-link nav-link--resume">Resume</a>
                </div>
            </div>
        </nav>
    );
};

// const NavBar: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isClient, setIsClient] = useState(false);
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const controlNavbar = useCallback(() => {
//         if (window.scrollY <= 50) {
//             setIsVisible(true);
//         } else if (window.scrollY > lastScrollY) {
//             setIsVisible(false);
//         } else if (window.scrollY < lastScrollY) {
//             setIsVisible(true);
//         }

//         setLastScrollY(window.scrollY);
//     }, [lastScrollY]);

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', controlNavbar);
//             return () => {
//                 window.removeEventListener('scroll', controlNavbar);
//             };
//         }
//     }, [controlNavbar]);

//     /*
//     const controlNavbar = () => {
//         if (typeof window !== 'undefined') {
//             if (window.scrollY <= 50) {
//                 // Always show the navbar when near the top
//                 setIsVisible(true);
//             } else if (window.scrollY > lastScrollY) {
//                 // If scrolling down
//                 setIsVisible(false);
//             } else {
//                 // If scrolling up
//                 setIsVisible(true);
//             }

//             setLastScrollY(window.scrollY);
//         }
//     };

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', controlNavbar);
//             return () => {
//                 window.removeEventListener('scroll', controlNavbar);
//             };
//         }
//     }, [lastScrollY]);
//     */
//     const backgroundColor: string = 'lightblue';
//     return (
//         <nav style={{ backgroundColor }} className={`fixed top-0 left-0 right-0 p-5 text-purple-400 z-10 transition-transform duration-300 bg-gray-900 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
//             <div className="flex items-center justify-between">
//                 <div className="text-3xl font-jetbrains font-semibold">SMU.</div>

//                 {/* Hamburger Menu Button for Mobile */}
//                 <div className="md:hidden">
//                     <button onClick={toggleMenu} className="text-purple-400 hover:text-white focus:outline-none z-30 absolute top-5 right-5">
//                         {isOpen ? (
//                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         ) : (
//                             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         )}
//                     </button>
//                 </div>

//                 {/* Menu Links */}
//                 <div
//                     className={`bg transform transition-transform duration-300 ease-in-out fixed md:static inset-y-0 md:inset-y-auto right-0 md:right-auto w-64 md:w-auto bg-gray-900 md:bg-transparent p-5 md:p-0 z-20 flex flex-col md:flex-row md:items-center md:space-x-4
//                     ${isClient && (isOpen ? 'translate-x-0 bg-red-700' : 'translate-x-full bg-red-700')} md:translate-x-0`}>
//                     <a href="#about" className="block text-sm font-jetbrains hover:text-white py-2 px-2 mt-12 md:mt-0">About</a>
//                     <a href="#experience" className="block text-sm font-jetbrains hover:text-white py-2 px-2">Experience</a>
//                     <a href="#projects" className="block text-sm font-jetbrains hover:text-white py-2 px-2">Projects</a>
//                     <a href="#contact" className="block text-sm font-jetbrains hover:text-white py-2 px-2">Contact</a>
//                     <a href="#resume" className="block text-sm font-jetbrains border border-purple-400 px-4 py-2 rounded hover:bg-purple-400 hover:text-gray-900 mt-2 md:mt-0">Resume</a>
//                 </div>
//             </div>
//         </nav>
//     );
// };

export default NavBar;
