import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { useState,useRef } from 'react';
import {IoSend} from 'react-icons/io5'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Chat = () => {
    const [message, setMessage] = useState(''); 
    const [userMessages,setUserMessages]=useState([])
    const [BotMessages,setBotMessages]=useState([])
    const [loading,updateLoding]=useState(false)
    const scrollContainerRef = useRef(null);

    const handleInputChange = (event) => {
            
            const { value } = event.target;
            setMessage(value);
            
            
            
    
  };
  const scrollToBottom = () => {
   
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight;
      const height = scrollContainerRef.current.clientHeight;
      scrollContainerRef.current.scrollTop = scrollHeight - height;
    }
  };

  useEffect(() => {
    scrollToBottom();
    
  }, [BotMessages,userMessages,loading]);


  const handelSubmit= (event)=>{
    event.preventDefault()
    
    setUserMessages([...userMessages,event.target.elements.userquerry.value])
    
    setMessage("");
    const fetchResponse = async () =>{
        updateLoding(true)
        try{
          var url=`http://127.0.0.1:8000/api/getres/?question=${encodeURIComponent(event.target.elements.userquerry.value)}/`;
          await fetch(url).then(response => response.json()).then(data => {setBotMessages([...BotMessages,data])}).catch(error => console.error(error));
          
        }
        catch{
          setBotMessages([...BotMessages,{"name":"unable to load"}])

          
        }
       
        updateLoding(false)
          
    }
    fetchResponse()
    
  }

  
  return (
    <div className='overflow-hidden h-screen'>
      <Nav />
        <div className='md:grid md:grid-cols-1fr-3fr mt-[90px]'>
            <div className='bg-[#003554] h-screen flex justify-center items-center    max-md:hidden relative'>
                <div className='flex h-full w-full flex-cols justify-center items-center '>
                    <h1 className='text-[40px] text-white font-bold max-md:text-[20px] text-center  '> SRM Portal Chat Bot</h1>
                </div>
            </div>

            <div  className='bg-[#3c4d55]   max-md:min-h-screen  flex  h-screen relative justify-center '>

            
                    <div ref={scrollContainerRef} className='overflow-y-scroll h-[80%] hide-scrollbar    max-md:w-full sm:w-[900px] md:w-[650px] lg:w-[800px]'>
                        <div className='mb-5 '>
                                {userMessages.map((e,key)=>
                                <div key={key} className=' w-full '>
                                    <div  className='user-input-bg ' >
                                            <div className='user-input-warrper w-[90%] md:w-[70%]'>  
                                                        <h1 className='m-3 break-all'>{e}</h1><br/>   

                                            </div> 
                                    </div>
                                    {<div className='bot-input-bg bg-transparent '>
                                        <div className='bot-input-warrper w-[90%] md:w-[70%] '>
                                        
                                                {BotMessages[key]!=null && <p className=' break-all'>{BotMessages[key].name}</p>}
                                        </div>
                                    </div>}
                                    
                        
                                </div>
                            
                                )}
                                {loading && <div className='flex justify-center'><li className='text-white text-[15px] floating dot1'/><li className='text-green-500 text-[15px] floating dot2'/><li className='text-yellow-500 text-[15px] floating dot3'/></div>}
                    </div>
                        
                    </div>
               


                    <div className=" fixed bottom-5 w-full">
                                    <div className="flex justify-center ">
                                                <form onSubmit={handelSubmit} method='post' className='relative'>
                                                    <input  name='userquerry' id="userquerry" className="max-md:w-[350px] md:w-[450px] lg:w-[600px]  bg-[#1e2f36] text-white flex p-3 outline-none border-none justify-center max-h-[350px] pr-[10%]"  placeholder="Type your message..." value={message} autoComplete='off' onChange={handleInputChange}  required/>
                                                    
                                                    {!loading && <button type='submit' className='absolute bottom-[1%] pointer  bg-[#477590] p-1 rounded-lg m-2 right-0 text-white ' ><IoSend size={30}/></button>}
                                                    {loading && <div  className='absolute bottom-[1%] bg-[#477590]  p-1 rounded-lg m-2 right-0 text-white ' ><AiOutlineLoading3Quarters className='loading-spinner' size={30}/></div>}
                                                </form>        
                                    </div>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default Chat