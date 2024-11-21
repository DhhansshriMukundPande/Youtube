import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos,setVideos]= useState([]);

  useEffect (() =>{
    getVideos ();
  },[]);

  const getVideos = async () => {
 const data = await fetch (YOUTUBE_VIDEO_API);
 const json = await data.json();
 console.log(json)
 setVideos(json.items)
  }
  return (
    <div className={` flex  flex-wrap gap-3 mt-5  transition-all duration-300 scroll-smooth ${isMenuOpen ? 'pl-52' : 'pl-40'}`}>
    {videos.map (video => <Link to ={"/watch?v="+video.id}>
    <VideoCard  key={video.id} info ={video}/>
     </Link>
  )}


    </div>
  )
}

export default VideoContainer