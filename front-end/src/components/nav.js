import React from 'react'

const Nav = () => {
  return (
    <div className='my-font fixed top-0 z-20 bg-white w-full text-[#006494] text-[16px] p-8 flex justify-between items-center max-md:p-5'>
        <div>
            <h3><a href='/'>Ai Chat Bot</a></h3>
        </div>
        <div className='flex gap-5'>


            <a href='/contact' className='p-2'>Contact</a>
            <a href='/login' className='shadow-2xl  text-[18px] bg-[#003554] text-white  rounded-md p-2'>Login</a>
        </div>
    </div>
  )
}

export default Nav