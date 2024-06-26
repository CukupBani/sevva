'use client'

import { NAVBAR_ELEMENT } from '@/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type navbarProps = {
    visibility: 'hidden' | 'visible';
}

const Navbar = ({visibility}: navbarProps) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

  return (
    <>
        <nav className={`w-full z-20 top-0 bg-[#1B2538] sticky navbar-transition ${visible ? '' : 'navbar-hidden'}`}>
            {/* Container */}
            <div className='flex items-center justify-between px-10 py-6 h-[80px]'>
                {/* Component Kiri */}
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='fill-[#F7E135]'><path d="M7.599 17.399c0-.729-.591-1.32-1.32-1.32s-1.32.591-1.32 1.32c0 .729.591 1.32 1.32 1.32s1.32-.591 1.32-1.32zm7.922.88c0-.243-.197-.44-.44-.44h-6.162c-.243 0-.44.197-.44.44s.197.44.44.44h6.161c.244 0 .441-.197.441-.44zm3.521-.88c0-.729-.591-1.32-1.32-1.32-.729 0-1.32.591-1.32 1.32 0 .729.591 1.32 1.32 1.32.728 0 1.32-.591 1.32-1.32zm-15.226-5.722h-1.938c-.243 0-.44.197-.44.44v.45c0 .698.815.871 1.422.871l.956-1.761zm17.003 2.789c-.67-1.244-1.496-2.79-2.362-4.236-.692-1.154-1.206-1.706-2.421-1.925-1.228-.219-2.36-.305-4.036-.305s-2.808.086-4.036.306c-1.215.218-1.729.77-2.421 1.925-.864 1.441-1.684 2.977-2.362 4.236-.605 1.121-.863 2.123-.863 3.35 0 1.16.37 2.125.88 3.36v1.944c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-.88h11.443v.88c0 .486.394.88.88.88h1.32c.486 0 .88-.394.88-.88v-1.944c.511-1.235.88-2.2.88-3.36.001-1.229-.257-2.23-.862-3.351zm-13.767-3.331c.59-.983.75-1.012 1.223-1.097 1.117-.2 2.161-.278 3.725-.278s2.608.078 3.725.278c.474.085.634.113 1.223 1.097.359.6.713 1.222 1.051 1.831-1.281.194-3.538.471-5.999.471-2.683 0-4.856-.295-5.99-.488.336-.603.686-1.22 1.042-1.814zm10.206 9.344h-10.516c-1.471 0-2.664-1.192-2.664-2.664 0-1.445.446-2.131 1.042-3.237.916.181 3.492.62 6.88.62 3.064 0 5.775-.4 6.895-.591.584 1.083 1.026 1.769 1.026 3.209.001 1.471-1.192 2.663-2.663 2.663zm4.864-8.802c.243 0 .44.197.44.44v.45c0 .698-.815.871-1.422.871l-.956-1.76h1.938zm-4.419-9.677h-5.709v-.608c.001-.814-.708-1.455-1.532-1.387l-4.172.464c-.733.061-1.29.664-1.29 1.387v3.286c0 .723.556 1.325 1.288 1.386l4.171.466c.825.069 1.535-.572 1.535-1.388v-.607h2.224l.808-.988.815.989.871-.988.812.988 1.476-1.294-1.297-1.706zm-10.709 3.534l-.664-.059c-.187-.016-.336-.167-.335-.345v-3.286c0-.177.148-.329.335-.344l.663-.06v4.094z"/></svg>
                        <h1 className='font-bold text-3xl text-[#F7E135]'>SEVVA</h1>
                    </div>
                    
                    <ul className='flex items-center gap-5'>
                        {NAVBAR_ELEMENT.map((nav) => (
                            <Link key={nav.key} href={nav.link} className='font-semibold duration-200 text-[#F7E135] hover:text-white'>
                                <li>{nav.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                {/* End of Component Kiri */}

                {/* Profile Button with Dropdown */}
                <div className='relative'>
                    <button onClick={toggleDropdown} className='text-[#1B2538] fill-[#1B2538] flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-[#E0FBE2] duration-200 hover:bg-[#F7E135] hover:shadow-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                        <p>Masuk</p>
                    </button>
                    <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-300 ease-in-out transform ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <Link href='/Profile' className='block px-4 py-2 text-black hover:bg-gray-200'>
                            Profil
                        </Link>
                        <Link href='/Market' className='block px-4 py-2 text-black hover:bg-gray-200'>
                            Kelola Kendaraan
                        </Link>
                        <Link href='/logout' className='block px-4 py-2 text-black hover:bg-gray-200'>
                            Logout
                        </Link>
                    </div>
                </div>
                {/* End of Profile Button with Dropdown */}
                    
            </div>
            {/* End Of Container */}

            <div className={`flex items-center gap-2 px-10 py-2 bg-[#131A26] w-full ${visibility}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-[#F7E135]'><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                <input type='text' placeholder='Masukkan Kata Kunci' className='w-full bg-transparent text-white focus:outline-none'/>
            </div>
        </nav>
    </>
  )
}

export default Navbar