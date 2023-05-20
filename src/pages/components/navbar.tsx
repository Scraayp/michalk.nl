import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
   <header className="text-white font-bold">
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       <Link className="flex title-font font-medium items-center text-white hover:text-primary mb-4 md:mb-0" href="../">
          <Image src="/logo.png" width={50} height={50} alt="logo" className='rounded-full' />
         <span className="font-bold ml-3 text-xl">Michal</span>
       </Link>w
       <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" >
         <Link className="mr-5 text-xl hover:text-primary" href="#about">About</Link>
         <Link className="mr-5 text-xl hover:text-primary" href="#projects">Projects</Link>
         <Link className="mr-5 text-xl hover:text-primary" href="#contact">Contact</Link>
       </nav>
     </div>
   </header>
    
    
    
  )
}
