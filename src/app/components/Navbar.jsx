
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] =useState(false);
  let Links =[
    {name:"Home",link:"/"},
    {name:"About Us",link:"/"},
    {name:"Health",link:"/"},
    {name:"Fitness",link:"/"},
    {name:"Wellness",link:"/"},
    {name:"News & Views",link:"/"},
    {name:"Get In Touch",link:"/"},
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`${
        (isScrolled&&!open) ? 'bg-white text-black' : 'bg-[#352cc8] text-white'
      } fixed top-0 w-full z-10 shadow-md  backdrop-filter transition-all duration-300 ease-in-out z-50`}
    >
      <nav className="relative flex items-center justify-between w-full max-w-screen-lg px-5 mx-auto lg:px-2 lg:shadow-none">
        <h1 className={`w-full text-3xl font-bold`}>
          <Image src={`${(isScrolled&&!open) ? '/logo-2.png' : '/logo.png'}`} alt="CareJar" width="128" height="64" />
        </h1>
        <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`${open ? "bg-[#352cc8] text-white" : ""} md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link,index) => (
                    <li className='md:ml-8 md:my-0 my-7 ' style={{ whiteSpace: 'nowrap' }} key={index}>
                        <Link href={link.link} className=' hover:text-blue-400 duration-300'>{link.name}</Link>
                    </li>))
                }
              
            </ul>
      </nav>
    </div>
  );
}
