import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      
    <div className='flex flex-col gap-10 max-md:mt-[66px] my-font overflow-hidden'> 
      <div className='min-h-[450px] flex flex-col gap-5 justify-end w-full  p-5 md:p-10'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[70px] text-[#3c4d55] font-bold max-md:text-[50px]'>Leave Application Assistant Chat Bot</h1>
          <p className='w-[80%] text-[#003554] text-[16px]  2xl:text-[24px] '>Welcome to the world of amusing AI-powered chat! Unleash the 
            power of our chatbot to bring laughter, sarcasm, and unexpected surprises to your day. Brace yourself for the chat experience of a lifetime.</p>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[#3c4d55] font-bold text-[38px] max-md:text-[35px]'>Ready, Set, Chat!</h1>
          <Link to="/chat" className='text-[20px] bg-black w-fit text-white p-2 rounded-lg'>Try free</Link>
        </div>
      </div>


      <div className='h-fit text-white   bg-[#003554] min-h-[800px] p-[30px]  md:p-[70px] mt-20 Staatliches '>
        
        <div className=' flex flex-col  gap-[40px]  '>
            <div className='w-full md:ml-[10%]'>
              <h2 className='text-[48px] font-bold'>Explore</h2>
            </div>
            <div className='flex w-full justify-center '>
              <div className='flex  gap-[6vw]  my-font text-[16px]  justify-between max-w-[1500px] md:w-[80%] 2xl:text-[24px]     max-md:flex-col max-md:gap-0'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='  ' >
                            <p>
                            Imagine having a expert at your fingertips, 24 hours a day, 7 days a week.  AI-powered tools that can answer your questions about leaves and guidelines . They can also provide you with personalized recommendations and support.
                            </p>
                    </div>
                    <div className=' max-md:mt-10 '>
                            <p>
                            SRM Portal Chat-Bot can be used on a variety of devices, including smartphones, tablets, and computers. This makes them accessible to people with disabilities and people who live in remote areas.
                            </p>
                    </div>
                  </div>
              </div>
            </div>
            <div>

            </div>
        </div>


          <div className='mt-[10%] gap-5 text-[#00A6FB]  md:p-5 flex items-center justify-center max-md:flex-col'>
              <div className='flex justify-center'>
                <img className='object-contain w-[70%] rounded-xl aspect-[4/3] min-w-[300px] float-right' src='https://etimg.etb2bimg.com/photo/99989510.cms' alt='home-image1' />
              </div>
              <div>
                  <h2 className='Staatliches text-[48px] max-md:text-[40px] font-bold'>Let’s Get Chatting!</h2>
                  <p className='my-font text-[16px] 2xl:text-[24px] max-w-[600px]'>Ask questions about health and medicine,Get personalized recommendations,Get support for your health goals</p>
              </div>
          </div>


          <div className='mt-[10%] gap-5 text-[#00A6FB]  md:p-5 flex items-center justify-center max-md:flex-col'>
            
                  <div className='md:order-1 flex justify-center'>
                    <img className='object-contain  w-[70%] rounded-xl aspect-[4/3] min-w-[300px] float-left' src='https://etimg.etb2bimg.com/photo/99989510.cms' alt='home-image1' />
                  </div>

                  <div >
                      <h2 className='Staatliches text-[48px] max-md:text-[40px] font-bold'>Personalized Responses</h2>
                      <p className='my-font text-[16px] 2xl:text-[24px] max-w-[600px]'>medical chatbot that can provide you with personalized responses based on your individual needs and health goals. It does this by learning about you over time, including your medical history, symptoms, medications, and lifestyle.</p>
                  </div>
            </div>
                  
            
         


          <div className='mt-[150px] text-center flex flex-col w-full gap-3  md:p-10 justify-center items-center'>
              
                  <h2 className='Staatliches text-[48px] font-bold max-md:text-[40px] '>Ready, Set, Chat!</h2>
                  <p className='my-font text-[16px] 2xl:text-[24px] max-w-[500px]'>Are your fingertips itching to start babbling away with the best AI chatbot around? Put your words to the test and let’s get chatting!</p>
                  <Link to="/chat" className='text-[18px] bg-black w-fit text-white p-2 rounded-lg'>Try free</Link>
          
          </div>

          <div className='mt-[100px] my-font text-center flex flex-col w-full gap-3  p-10 justify-center items-center'>
                  <div className='flex gap-5'>
                    <AiFillGithub size={40}/>
                    <AiFillLinkedin size={40}/>
                  </div>
                  <h2 className=' text-[16px] 2xl:text-[24px]  '>© 2023 Chat Haven. All rights reserved.</h2>
                  <p className='my-font text-[16px] 2xl:text-[24px] max-w-[500px] opacity-[0.5]'>Created on October 15, 2023</p>
                 
          
          </div>


          <div>

          </div>
        
      </div>



      
    </div>
    </div>
  )
}

export default Home;