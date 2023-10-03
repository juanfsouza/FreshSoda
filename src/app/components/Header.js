"use client";

import { useContext, useEffect, useState } from 'react';

// next image
import Image from 'next/image';

// react scroll 
import { Link } from 'react-scroll';

// component
import SearchMobile from './SearchMobile';

// media query hook
import { useMediaQuery } from 'react-responsive'; 

// icons
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import Partnership from './Partnership';
import Contact from './Contact';



export default function Header() {
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);
    
    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });

    useEffect(() => {
        const handleScroll = () => {
            // header
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }

        };

        // add event listener
        window.addEventListener('scroll', handleScroll);

        // remove event listener
        return () => {
         window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header
        className={`${ header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'}
        fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
        >
            <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
                <div className='flex justify-between items-center px-0'>
                    {/* Logo */}
                    <Link
                        to='home'
                        smooth={desktopMode}
                        spy={true}
                        className='cursor-pointer'
                    >
                        <Image src={'/icons/FruitIcon.png'} width={100} height={64} alt='' />
                    </Link>
                    {/* nav open menu */}
                    <div 
                        onClick={() => setNav(!nav)} 
                        className='cursor-pointer xl:hidden'
                    >
                    {nav ? (
                        <BiX className='text-4xl'/>
                    ) : (
                        <BiMenuAltRight />
                    )}
                    </div>
                </div>
                {/* nav */}
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
                    } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-bold xl:flex-row xl:w-max xl:gap-x-12 xl:h-max xl:bg-transparent
                    xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
                >
                    <Link
                        className='cursor-pointer'
                        to='home'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    Shop
                    </Link>
                    <Link
                        className='cursor-pointer'
                        to='cars'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    About
                    </Link>
                    <Link
                        className='cursor-pointer'
                        to='about'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    Careers
                    </Link>
                    <Link
                        className='cursor-pointer'
                        to='why'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    Partnership
                    </Link>
                    <Link
                        className='cursor-pointer'
                        to='testimonials'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    Contact
                    </Link>
                    <Link
                        className='cursor-pointer'
                        to='contact'
                        activeClass='active'
                        smooth={desktopMode}
                        spy={true}
                    >
                    Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}