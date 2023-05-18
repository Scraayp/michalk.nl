import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
   <header className="text-white body-font">
        <div className="container flex">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 float-left">
                <Image src="/logo.png" alt="logo" width={80} height={80} className='rounded-full' />
            </a>
            <nav id="links" className=" float-right mr-auto">
              <Link className="mr-5 hover:text-primary" href="#">About</Link>
              <Link className="mr-5 hover:text-primary" href="#">Projects</Link>
              <Link className="mr-5 hover:text-primary" href="#"> Contact</Link>
            </nav>
        </div>
    </header>
  )
}
