import { useNavigate } from 'react-router-dom';
import nfbgimg from "/public/nfbgimg.jpg"
export default function About() {
    const navigate = useNavigate();
    return (
      <>    
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 w-full " style={{
        background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6),rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${nfbgimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      //  backgroundImage: ``
      }}>
          <div className="text-center">
            <p className="text-9xl font-semibold text-red-600">404</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-8xl">Page not found</h1>
            <p className="mt-6 text-5xl  text-white">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6" onClick={() => navigate(-1)}>
              <a
                
                className="cursor-pointer rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  