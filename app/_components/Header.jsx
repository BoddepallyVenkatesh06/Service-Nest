"use client"

import { Button } from '../../components/ui/button'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Image from "next/image";

const Header = () => {

  const { data } = useSession();

  useEffect(() => {
    console.log("user data = ", data)
  }, [data])

  return (
    <div className="px-6 md:px-16 shadow-md text-white bg-slate-100 md:bg-transparent">
      <div className="flex items-center justify-between gap-8 ">
        {/* website logo */}
        <Link href='/' className='flex gap-1 items-center justify-center '>
          <Image src="/assets/logo/smart-home-logo.png" alt="" width={70} height={70} />
          <p className="text-lg sm:text-2xl font-bold text-black md:text-white">Service Nest</p>
        </Link>

        <div className="md:flex items-center gap-6 hidden">
          <Link href='/'
            className="hover:scale-105 hover:text-purple-400
                cursor-pointer"
          >
            Home
          </Link>
          <Link href='/services'
            className="hover:scale-105 hover:text-purple-400
                cursor-pointer"
          >
            Services
          </Link>
          <Link href='/about'
            className="hover:scale-105 hover:text-purple-400
                cursor-pointer"
          >
            About Us
          </Link>
        </div>

        <div>
          {data?.user ?

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image src={data?.user?.image}
                  alt='user'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={'/mybooking'}>My Booking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

            :

            <Button onClick={() => signIn('descope')}>Login / Sign Up</Button>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
