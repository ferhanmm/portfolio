import Link from 'next/link'
import Logo from '../logo/page';

export default function Navbar() {
  return (
    //Create a header navbar with About, Projects, and Contact
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">

      <nav className="flex items-center gap-10 container font-semibold">

        <Link href="/" className='mr-auto'>
          <Logo />
        </Link>

        <Link href="/about">
          About
        </Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/contact">
          Contact
        </Link>
      
      </nav>

    </header>
  

  )
}