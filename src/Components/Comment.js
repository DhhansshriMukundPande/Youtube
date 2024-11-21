import React from 'react'

const Comment = ({data}) => {

const {name,text,replies}=data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
        <img className="w-12 h-12 "alt="img" 
        src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png">
       </img>
       <div className='px-3'>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
       </div>




    </div>
  )
}

export default Comment