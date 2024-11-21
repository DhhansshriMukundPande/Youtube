import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
<img className=" h-8 "alt="img" 
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png">
       </img>
     <span className='font-bold px-2'>{name}</span>
     <span>{message}</span>

    </div>
  )
}

export default ChatMessage