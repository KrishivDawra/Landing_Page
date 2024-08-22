import React from 'react'

const body = () => {
  return (
    <div className='space-y-10 pt-6 lg:flex  '>
      <div className='flex justify-center items-center lg:flex-1 lg:order-2 lg:justify-center'>
        <img src='.\src\assets\Blue-Shape.svg' alt='1st' className='rotate-[60deg] h-64 md:h-80 lg:h-[400px]'></img>
        <img src='.\src\assets\Purple-Shape.svg' alt='2nd' className='absolute rotate-[40deg] h-64 md:h-80 lg:h-[400px]'></img>
        <img src='.\src\assets\Pink-Shape.svg' alt='3rd' className='absolute rotate-[20deg] h-64 md:h-80 lg:h-[400px]' ></img>
        <img src="./src/assets/Hero-Model.png" className='absolute h-64 md:h-80 lg:h-[400px] ' alt="" />
      </div>

      <div className='lg:flex-1 lg:order-1 '>
        <h1 className='font-bold font-serif text-5xl leading-tight' >Host Your Website in Less Than 5 minutes</h1>
        <p className='font-serif text-gray-500'>With hoster got your website up and rinning in the less than 5 minutes with the most competitive pricing packages available online.</p>
        <form action='' className='flex flex-col gap-4 md:flex-row'>
          <input className='rounded-md py-4 px-3 placeholder:text-gray-400 md:px-10 md:gap-2' type='email' placeholder='Enter Email Address'/>
          <button className='rounded-md text-gray-500 px-4 py-3 bg-blue-300 hover:bg-blue-500 '>Join Watchlist</button>
        </form>

        <div className='flex px-4 gap-4 py-4 '>
          <img className='' src='.\src\assets\Checkmark.svg' alt=''></img>
          <p className='font-serif text-black'>No spam, ever. Unsubscribe anytime</p>
        </div>
      </div>

    </div>
  )
}

export default body
