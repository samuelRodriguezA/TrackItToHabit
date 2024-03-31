import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Filter } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Logo"
          className='max-sm:size-10 filter:invert(1)'
          style={{
            filter: 'invert(1)'
          }}
        />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
          Track It To Habit
        </p>
      </Link>
      <div className="flex gap-5 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <div className='font-extrabold text-white flex gap-2'>
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
        <MobileNav />
      </div>
    </div>
  )
}

export default Navbar
