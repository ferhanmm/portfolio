import Link from "next/link";

export default function Work() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
        <div className="w-96 h-56 bg-white shadow-md overflow-hidden relative">
          <div className="flex flex-row h-full">

            {/* Work Section */}
            <div className="flex flex-col justify-center items-center w-full p-4">
              <h1 className="text-md font-medium mb-2">My Work</h1>
              <span className="text-xs font-regular text-center">
                I have worked on various IAM projects, focusing on cloud security and identity management.
              </span>
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