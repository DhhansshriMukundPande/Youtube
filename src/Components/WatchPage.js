import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import {YOUTUBE_VIDEO_API} from '../utils/constants'
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';





const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v"); // Extract videoId from the URL
  const dispatch = useDispatch();

  // State to hold the video title and description
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');

  useEffect(() => {
    dispatch(closeMenu());

    // Fetch video details
    const fetchVideoDetails = async () => {
      if (!videoId) return;

      
      const apiUrl = `${YOUTUBE_VIDEO_API}&id=${videoId}`;;

      const response = await fetch(apiUrl);
      console.log(response)
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const videoInfo = data.items[0];
        setVideoTitle(videoInfo.snippet.title);
        setVideoDescription(videoInfo.snippet.description);
      } else {
        setVideoTitle("Video title not found");
        setVideoDescription("");
      }
    };

    fetchVideoDetails();
  }, [dispatch, videoId]);

  return (
    <div className='w-full flex mt-28 ml-60'>
      <div>
<iframe width="900" height="500" src={`https://www.youtube.com/embed/${videoId}`}
 title="YouTube video player"
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
   </iframe>
   <h1>{videoTitle}</h1>
   <CommentsContainer/>
   </div>
  
   <div className='w-full'>
    <LiveChat/>
   </div>
 
    </div>
 
  )
}

export default WatchPage