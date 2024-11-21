import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';






const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage,setLiveMessage]=useState("")

  const chatMessages = useSelector((store)=> store.chat.messages)

   useEffect(()=>{
    const i=   setInterval(()=>{
    

     dispatch(addMessage({
      name:generateRandomName(),
      message:makeRandomMessage(20)
     }))
       },2000);

       return () => clearInterval(i);
       
   },[]);



  return (
    <>
    <div className=' overflow-y-scroll rounded-lg bg-slate-100 w-full h-[498px] ml-2 p-2 border border-black flex flex-col-reverse'>
       
       <div>
       {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
</div>
       </div>

<form className='w-full p-2 ml-2  border-black 'onSubmit={(e)=>{
 e.preventDefault();
 console.log("on form submit",liveMessage)
 dispatch(addMessage({
  name:"Dhhansshri",
  message:liveMessage

 }))
 setLiveMessage("")
}}>
<input className="w-3/4 p-2 border rounded shadow" type ="text" value={liveMessage}
 onChange ={(e)=>
 setLiveMessage(e.target.value)}></input>
<button className="p-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow">Send</button>
</form>
</>
   
  )
}

export default LiveChat