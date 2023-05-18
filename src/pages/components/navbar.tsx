import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <header className="text-white body-font">
    <div className="container flex">
      <a className="">
          <Image src="/logo.png" alt="logo" width={80} height={80} className='rounded-full' />
      </a>
      <nav id="links" className="">
        <Link className="mr-5 hover:text-primary" href="#">About</Link>
        <Link className="mr-5 hover:text-primary" href="#">Projects</Link>
        <Link className="mr-5 hover:text-primary" href="#"> Contact</Link>
      </nav>
    </div>
  </header>
  )
}
