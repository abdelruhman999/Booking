import React from 'react'
import { Link } from 'react-router-dom'

export default function Navpar() {
  return (
    <div className='bg-[#1B1A2A]
    w-full font-Inter font-medium text-[18px] text-white
    gap-[32px] p-[15px] text flex justify-center'>
      <button onClick={() => {
        const aboutSection = document.getElementById("about-us");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }}>
        contact us
      </button>
      <a className='cursor-pointer' href='/'>about</a>
      <Link
       to='/Sittings'
      >Sittings
      </Link>
    </div>
  )
}
