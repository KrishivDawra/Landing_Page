import React from 'react'
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex justify-between '>
      <div className='flex items-center justify-center gap-2 '>
        <img src=".\src\assets\Logo.svg" alt=''></img>
        <button className=' rounded-2xl bg-gradient-to-r from-orange-400 to-red-400 font-sans font-semibold text-xs text-white px-2.5 py-1.5'>Hoster is Hiring</button>
      
      </div>

      
          <ul className='hidden lg:flex lg:text-gray-500 lg:justify-center lg:font-serif lg:items-center lg:gap-8'>
            <li><a href='#'>Plans</a></li>
            <li><a href='#'>Fint domain</a></li>
            <li><a href='#'>Hosters</a></li>
          </ul>
      
      
      <div className=' hidden lg:flex gap-6 justify-center items-center'>
        <a className=' py-3 text-gray-500 font-bold'>Sign IN</a>
        <button className='rounded-xl text-black font-bold px-4 py-3 bg-blue-300 hover:bg-blue-500 '>Join Watchlist</button>
      </div>
      
      <div className='lg:hidden'>
        <FaBars />
      </div>
    </div>
  )
}

export default Header
