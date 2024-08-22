import React from 'react'

const footer = () => {
  return (
    
     <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
        <ul className='flex text-gray-500 px-10  gap-8'>
          <li><a href='#'>Instagram</a></li>
          <li><a href='#'>Linkedin</a></li>
          <li><a href='#'>Twitter</a></li>
        </ul>

        <div className='flex gap-5'>
          <img src='./src/assets/Help-Avatar.svg' alt=''></img>
          <div >
            <p className='font-serif'>Have any questions?</p>
            <a className='font-serif font-bold' href="#">Take to a specialist</a>
          </div>
        </div>

        
     </div>
    
  )
}

export default footer
