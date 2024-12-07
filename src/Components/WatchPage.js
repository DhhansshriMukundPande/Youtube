import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import {API_KEY} from '../utils/constants'


const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoDetails,setVideoDetails]=useState(null)
  const videoId= searchParams.get("v");
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(closeMenu());

    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideoDetails(data.items[0]);
        } else {
          console.error('No video details found');
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
    }
  }, [videoId, dispatch]);
    

  return (
    <div className='w-full flex mt-28 ml-60'>
      <div>
<iframe width="900" height="500" src={'https://www.youtube.com/embed/'+videoId}
 title="YouTube video player"
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
   </iframe>
   {videoDetails ? (
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{videoDetails.snippet.title}</h1>
            {/* <p className="mt-2 text-gray-600">{videoDetails.snippet.description}</p> */}
            <div className=" flex  gap-4 mt-2">
              <p>Views: {videoDetails.statistics.viewCount}</p>
              <p>Likes: {videoDetails.statistics.likeCount}</p>
            </div>
          </div>
        ) : (
          <p>Loading video details...</p>
        )}
   
   <CommentsContainer/>
   </div>
  
   <div className='w-full'>
    <LiveChat/>
   </div>
 
    </div>
 
  )
}

export default WatchPage