import React from 'react'


const VideoCard = ({info}) => {


  const  {snippet,statistics}=info ||{};
  const{channelTitle,title,thumbnails }= snippet ||{};

  return (
    <div  className=' w-72 h-80 shadow-lg p-4 rounded-lg'>
      <img className='rounded-lg' src ={thumbnails?.medium?.url||''} alt={title || 'Video Thumbnail'} />
     <ul className=''>
      <li className="font-bold break-words">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics?.viewCount} views</li>
     </ul>

    </div>
  )
}

export default VideoCard