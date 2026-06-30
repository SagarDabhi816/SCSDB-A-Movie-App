import React, { useEffect, useState } from 'react';
import loader from "../../public/loader.webp"

const Loading = () => {

  const [showTimeoutMessage, setShowTimeoutMessage] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowTimeoutMessage(true);
    }, 12000); // Adjust the timeout value as needed

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className='w-full h-full flex justify-center items-center bg-black text-white '>
   
   {showTimeoutMessage && (
        <h1 className="text-2xl absolute top-10">Taking Too Long Let's Refresh</h1>
      )}
      <img  className="h-[100vw] sm:h-[50vw] object-cover"src={loader} />
    </div>
  )
}

export default Loading
