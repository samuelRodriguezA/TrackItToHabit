import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { sidebarLinks } from '../constants/index';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';
import { SignInButton, SignedOut, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs';

const MobileNavLanding = () => {
    const pathname = usePathname();

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="Menu"
                        className="cursor-pointer sm:hidden"
                        style={{
                            filter: 'invert(1)'
                        }}
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-dark-1">
                    <Link href="/" className='flex items-center gap-1'>
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt="Logo"
                            className='max-sm:size-10'
                            style={{
                                filter: 'invert(1)'
                            }}
                            
                        />
                        <p className='text-[26px] font-extrabold text-white'>
                            Track It To Habit
                        </p>
                    </Link>
                    <div className="flex flex-col gap-4 mt-4">
                        <Link href="/aboutus" className="text-white hover:text-gray-300 transition-colors duration-300">
                            About Us
                        </Link>
                        <Link href="/services" className="text-white hover:text-gray-300 transition-colors duration-300">
                            Services
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300">
                            Contact
                        </Link>
                        <Link href="/home" className="text-white hover:text-gray-300 transition-colors duration-300">
                            Dashboard
                        </Link>
                    </div>
                    <div className=' font-extrabold text-white flex gap-2'>
                  <SignedOut>
                      <SignUpButton afterSignInUrl="/home" afterSignUpUrl='/home'>
                          <button className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 flex items-center gap-2'>
                              <span>SignUp</span>
                          </button>
                      </SignUpButton>
                      <SignInButton afterSignInUrl="/home" afterSignUpUrl='/home'>
                          <button className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200 flex items-center gap-2'>
                              <span>SignIn</span>
                          </button>
                      </SignInButton>
                  </SignedOut>
              </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNavLanding;


