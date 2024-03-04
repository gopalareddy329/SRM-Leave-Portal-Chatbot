import React from 'react'
import { Link } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/ContentWrapper'
const Header = () => {
  return (
    <ContentWrapper>
        <div className='min-h-[450px] flex flex-col gap-5 justify-end w-full max-sm:mb-10 p-5 md:p-20'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[70px] text-[#3c4d55] font-bold max-md:text-[30px]'>SRM Leave Application Assistant Chat Bot</h1>
              <p className='md:w-[80%] text-[#003554] text-[16px]  2xl:text-[24px] '>Welcome to the world of amusing AI-powered chat! Unleash the 
                power of our chatbot to bring laughter, sarcasm, and unexpected surprises to your day. Brace yourself for the chat experience of a lifetime.</p>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-[#3c4d55] font-bold text-[38px] max-md:text-[30px]'>Ready, Set, Chat!</h1>
              <Link to="/chat" className='text-[20px] bg-black w-fit text-white p-2 rounded-lg'>Try free</Link>
            </div>
          </div>
      </ContentWrapper>
  )
}

export default Header