"use client"
import React from 'react'
import Link from 'next/link'; // Import Link from next/link
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../components/ui/navbar-menu";
import { cn } from "../../components/utils";
import { useState } from 'react';

function NavbarDemo() {
    return (
      <div className="relative w-full flex items-center justify-center ">
        <Navbar className="top-2" />
      </div>
    );
  }
   
  function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
      >
        <Menu setActive={setActive}>
        <Link href='/prizes'>
          <MenuItem setActive={setActive} active={active} item="Prizes">
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div> */}
          </MenuItem>
          </Link>
          <Link href='/vaults'>
          <MenuItem setActive={setActive} active={active} item="Vaults">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              {/* <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              /> */}
            </div>
          </MenuItem>
         </Link>
         <Link href='/accounts'>
          <MenuItem setActive={setActive} active={active} item="Accounts">
            <div className="flex flex-col space-y-4 text-sm">
              {/* <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
            </div>
          </MenuItem>
          </Link>
          
        </Menu>
      </div>
    );
  }

const page = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center pt-48"> 
      <NavbarDemo />

     
      <div>
      <h1 className="text-white text-center text-3xl mt-6">
      Keep your deposit. Win up to<span className="font-bold text-orange-500">$188,843 🎉</span> 
      </h1>
      <h1 className=' mt-[40px] font-bold text-2xl text-center text-orange-500'>Current Prizes</h1>
      </div>
  
  <div className='flex flex-row gap-x-12'>
      <div className='border border-orange-500 mt-[40px] p-6 w-[400px] h-[250px] rounded-md'>
      <h1 className='text-orange-500 font-bold text-2xl text-center'>Mina</h1>
<div className='flex justify-between items-center mt-4 w-full'>
    <h2 className='text-white'>Prizes</h2>
    <h2 className='text-white'>Frequency</h2>
  </div>

  <hr className='border-t border-white mt-2 w-full' />

  <div className='flex justify-between items-start mt-2 w-full'>
    <div className='flex flex-col'>
      <p className='text-white font-medium text-xl'>$1370</p>
      <p className='text-white font-medium text-xl'>$325</p>
    </div>
        <div className='flex flex-col text-right'>
      <p className='text-white font-medium text-xl'>Every 2 months</p>
      <p className='text-white font-medium text-xl'>4x monthly</p>
    </div>
  </div>
</div>


<div className='border border-orange-500 rounded-md mt-[40px] p-6 w-[400px] h-[250px]'>
  <h1 className='text-orange-500 font-bold text-2xl text-center'>Ethereum</h1>
<div className='flex justify-between items-center mt-4 w-full'>
    <h2 className='text-white'>Prizes</h2>
    <h2 className='text-white'>Frequency</h2>
  </div>

  <hr className='border-t border-white mt-2 w-full' />

  <div className='flex justify-between items-start mt-2 w-full'>
    <div className='flex flex-col'>
      <p className='text-white font-medium text-xl'>$1370</p>
      <p className='text-white font-medium text-xl'>$325</p>
    </div>
        <div className='flex flex-col text-right'>
      <p className='text-white font-medium text-xl'>Every 2 months</p>
      <p className='text-white font-medium text-xl'>4x monthly</p>
    </div>
  </div>
</div>

</div>
      
    </div>
  )
}

export default page
