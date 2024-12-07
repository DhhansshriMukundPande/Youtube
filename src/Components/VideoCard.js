import React from 'react'


const VideoCard = ({info}) => {


  const  {snippet,statistics}=info ||{};
  const{channelTitle,title,thumbnails }= snippet ||{};

  return (
    <div  className='sm:h-[380px] w-48   md:w-72 h-80 shadow-lg p-4 rounded-lg'>
      <img className='rounded-lg' src ={thumbnails?.medium?.url||''} alt={title || 'Video Thumbnail'} />
     <ul className=''>
      <li className=" font-bold md:font-bold break-words">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics?.viewCount} views</li>
     </ul>

    </div>
  )
}

export default VideoCard