import React from 'react'
import Loader from "../../public/giphy.webp"
import { Link, useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
     <Link
        onClick={() => navigate(-1)}
        className="absolute top-0 left-10 ri-close-fill cursor-pointer ri-5x text-zinc-200 hover:text-[#6556CD]"
      ></Link>
      <img  className="h-[50vw]"src={Loader} />
    </div>
  )
}

export default Notfound
