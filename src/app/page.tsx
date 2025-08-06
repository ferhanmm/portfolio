

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="w-96 h-56 bg-white shadow-md overflow-hidden font-['IBM_Plex_Mono']">
          <div className="flex flex-row h-full">

              {/* Left Section (1/3) */}
              <div className="w-1/3 p-4 flex items-center justify-center">
                <span className="text-5xl font-regular">FM</span>
              </div>

              {/* Right Section (2/3) */}
              <div className="w-2/3 flex flex-col justify-center">
                <div>
                  <span className="text-md font-medium block">Ferhan Moton</span>
                  <span className="text-xs font-regular italic block">IAM Engineer</span>
                  <br />
                </div>

                <div>
                  <span className="text-xs font-regular block">+123-456-7890</span>
                  <span className="text-xs font-regular block">123 Main St, Anytown, USA</span>
                  <span className="text-xs font-regular block">ferhanmm@email.com</span>
                </div>
              </div>

          </div>
      </div>
    </div>
  );
}
