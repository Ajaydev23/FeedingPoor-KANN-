import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center bg-gray-900 w-full">
      <div className="flex flex-col lg:flex-row items-center w-full justify-between text-white max-w-7xl">
        <div className='flex justify-around py-4'>
        <div className="w-1/2">
          <div className="text-3xl font-medium text-cyan-400 my-2">Kann</div>
          <div className="text-gray-400 text-sm">
            Empowering Communities, One Meal Donation at a Time: KANN Vision for
            a Hunger-Free World.
          </div>
        </div>
        <div>
          <div className="text-pink-600 text-xl font-medium">Useful Links</div>
          <ul className="flex-col text-white text-sm font-medium">
            <li
              className={`${
                router.pathname === '/' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              <div className="hover:text-cyan-400 cursor-pointer  ">
                <Link href={'/'}> Home</Link>
              </div>
            </li>
            <li
              className={`${
                router.pathname === '/contact' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              <div className="hover:text-cyan-400 cursor-pointer ">
                <Link href={'/contact'}>Contact Us</Link>
              </div>
            </li>
            <li
              className={`${
                router.pathname === '/about' ? 'text-cyan-400' : 'text-white'
              }`}
            >
              <div className="hover:text-cyan-400 cursor-pointer ">
                <Link href={'/about'}> About</Link>
              </div>
            </li>
            <li
              className={`${
                router.pathname === '/hotel/login'
                  ? ' text-red-400'
                  : 'text-white'
              }`}
            >
              <Link
                href={'/hotel/login'}
                className="hover:bg-indigo-800 shadow-xl "
              >
                Hotel
              </Link>
            </li>
            <li
              className={`${
                router.pathname === '/community/login'
                  ? ' text-indigo-900'
                  : 'text-white'
              }`}
            >
              <Link href={'/community/login'} className="hover:bg-yellow-800 ">
                Community
              </Link>
            </li>
          </ul>
        </div>
        </div>
        <div className='flex md:bg-gray-900 bg-gray-800 items-center justify-around w-full'>
        <div className='p-4'>
          <div>
            Front-End Developer{' '}
            <strong className="text-cyan-500 text-lg">Rishav </strong> 
          </div>
          <div className="flex-col items-center">
            <div className="flex">
              <a className="flex items-center space-x-1 bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 text-white px-2 m-1" href="https://www.instagram.com/rshavkumr" target='_blank'>
                <ion-icon name="logo-instagram"></ion-icon>
                <div>
                 Instagram
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-blue-900 hover:bg-cyan-800 text-white px-2 m-1" href="https://www.linkedin.com/in/rishav518/" target='_blank'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <div>
                 Linkedin
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-black hover:bg-gray-800 text-white px-2 m-1" href="https://github.com/Rishav518" target='_blank'>
                <ion-icon name="logo-github"></ion-icon>
                <div>
                 Github
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-2 m-1" href="https://www.reddit.com/user/Arkay518" target='_blank'>
                <ion-icon name="logo-reddit"></ion-icon>
                <div>
                 Reddit
                </div>
              </a>
            </div>
            
          </div>
        </div>
        <div>
          <div>
            Back-End Developer{' '}
            <strong className="text-pink-500 text-lg">Chirag </strong> 
          </div>
          <div className="flex-col items-center">
            <div className="flex">
              <a className="flex items-center space-x-1 bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 text-white px-2 m-1" href="https://www.instagram.com/co_trarian/" target='_blank'>
                <ion-icon name="logo-instagram"></ion-icon>
                <div>
                 Instagram
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-blue-900 hover:bg-cyan-800 text-white px-2 m-1" href="https://www.linkedin.com/in/chirag-s-/" target='_blank'>
                <ion-icon name="logo-linkedin"></ion-icon>
                <div>
                 Linkedin
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-black hover:bg-gray-800 text-white px-2 m-1" href="https://github.com/vocaldrain" target='_blank'>
                <ion-icon name="logo-github"></ion-icon>
                <div>
                 Github
                </div>
              </a>
            </div>
            <div className="flex">
              <a className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-2 m-1" href="https://www.reddit.com/" target='_blank'>
                <ion-icon name="logo-reddit"></ion-icon>
                <div>
                 Reddit
                </div>
              </a>
            </div>
            
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
