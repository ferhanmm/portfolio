import Link from 'next/link'
import Logo from '../../../components/logo/page';
import { SignedIn, SignInButton, SignedOut } from '@clerk/nextjs';

export default function Navbar() {
  return (
    //Create a header navbar with About, Projects, and Contact
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">

      <nav className="flex items-center gap-10 container font-semibold">

        <Link href="/" className='mr-auto'>
          <Logo />
        </Link>

        <Link href="/about">
          Home
        </Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/contact">
          Contact
        </Link>

        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      
      </nav>

    </header>
  

  )
}