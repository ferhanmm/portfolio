export default function Home() {

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <div className="w-96 h-56 bg-white shadow-md overflow-hidden">
          <div className="flex flex-row h-full">

              {/* Left Section (1/2) */}
              <div className="w-1/2 flex items-center justify-center">
                <span className="text-6xl font-regular">FM</span>
              </div>

              {/* Right Section (1/2) */}
              <div className="w-1/2 flex flex-col justify-center">
                <div>
                  <span className="text-md font-medium block">Ferhan Moton</span>
                  <span className="text-xs font-regular italic block">IAM Engineer</span>
                  <br />
                </div>

                <div>
                  <span className="text-xs font-regular block">832-713-8006</span>
                  <span className="text-xs font-regular block">123 Main St, Anytown, USA</span>
                  <span className="text-xs font-regular block">ferhanmm@email.com</span>
                </div>
              </div>

          </div>
      </div>
    </div>
  </>
  );
}
