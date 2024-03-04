import React, { useState } from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import Chat from './Chat';

const PopUp = () => {
    const [showChat,setShowChat] = useState(false)
  return (
    <div className={`fixed ${showChat ? "bottom-0":"bottom-10"} max-md:  right-0`}>
        <div>
            {!showChat && 
                        <div onClick={()=>{setShowChat(true)}} className='bg-gray-200 rounded-full p-2 flex justify-center items-center text-center'>
                                <button><RiCustomerService2Fill size={40}/></button>
                        </div>
            }
        </div>
        <div>
            {showChat && <div ><Chat setShowChat={setShowChat}/></div>}

        </div>
    </div>
  )
}

export default PopUp