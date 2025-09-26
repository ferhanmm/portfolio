import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <div className="w-96 h-56 bg-white shadow-md overflow-hidden relative">
          <div className="flex flex-row h-full">

            {/* About Section */}
            <div className="flex flex-col justify-center items-center w-full p-4">
              <span className="text-xs font-regular text-center pb-2">IT Engineer who enjoys creating simple, reliable solutions and sharing knowledge to help others succeed.</span>

              <span className="text-xs font-regular text-left">A few things about me:</span>

              <ul className="text-xs font-regular text-left list-disc list-inside">
                <li>Enjoy tinkering with self-hosted projects and new tools</li>
                <li>Comfortable diving into both day-to-day support and long-term improvements</li>
                <li>Big believer in clear documentation and teamwork</li>
                <li>Always curious, always learning</li>
              </ul>

            </div>

          </div>

          {/* Footer Links - Absolutely positioned */}
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-3 justify-center">
            <Link href="/" className="text-xs font-regular cursor-pointer hover:underline transition-all">
              Front
            </Link>
            <Link href="/about" className="text-xs font-regular cursor-pointer hover:underline transition-all">
              About
            </Link>
            <Link href="/work" className="text-xs font-regular cursor-pointer hover:underline transition-all">
              Work
            </Link>
            <Link href="/contact" className="text-xs font-regular cursor-pointer hover:underline transition-all">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}