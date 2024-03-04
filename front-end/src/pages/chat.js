import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import {IoSend} from 'react-icons/io5'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BASE_API} from '../utils/api'
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
  function formatApiResponse(apiResponse) {
    let formattedResponse = apiResponse.replace(/\n/g, '<br>');
    formattedResponse = formattedResponse.replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
    formattedResponse = formattedResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return formattedResponse;
  }


  const handelSubmit= (event)=>{
    event.preventDefault()
    
    setUserMessages([...userMessages,event.target.elements.userquerry.value])
    
    setMessage("");
    const fetchResponse = async () =>{
        updateLoding(true)
        try{
          var url=`${BASE_API}/api/getres/?question=${encodeURIComponent(event.target.elements.userquerry.value)}/`;
          const res= await fetch(url)
          const response = await res.json()
          if(res.ok){
            const value= await formatApiResponse(response.response)
            setBotMessages([...BotMessages,{"response":value}])
          }else{
            throw res.error
          }
          
        }
        catch{
          setBotMessages([...BotMessages,{"response":"unable to load"}])

          
        }
       
        updateLoding(false)
          
    }
    fetchResponse()
    
  }

  
  return (
    <div className='overflow-hidden '>
      
        <div className='flex   h-screen'>
            <div className='bg-[#003554] w-[30%] flex justify-center items-center  h-full  max-md:hidden '>
                <div className='flex h-full w-full flex-cols justify-center items-center '>
                    <h1 className='text-[40px] text-white font-bold max-md:text-[20px] text-center  '> SRM Portal Chat Bot</h1>
                </div>
            </div>

            <div  className='bg-[#3c4d55]  min-h-[90%]  flex  w-[70%]  max-md:w-full relative justify-center h-full'>

            
                    <div ref={scrollContainerRef} className='overflow-y-scroll transform   transition-all ease-in-out duration-500 max-h-screen py-20 hide-scrollbar    max-md:w-full sm:w-[900px] md:w-[90%]  2xl:w-[70%]'>
                        <div className='mb-5 '>
                                {userMessages.map((e,key)=>
                                <div key={key} className=' w-full '>
                                    <div  className='user-input-bg ' >
                                            <div className='user-input-warrper bg-[#2e373b] w-[90%] md:w-[70%]'>  
                                                        <h1 className='m-3 break-all'>{e}</h1><br/>   

                                            </div> 
                                    </div>
                                    {BotMessages[key]!=null && <div className='bot-input-bg bg-transparent '>
                                        <div className='bot-input-warrper w-[90%] md:w-[70%] ' dangerouslySetInnerHTML={{ __html: (BotMessages[key].response) }} />
                                        
                                        
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