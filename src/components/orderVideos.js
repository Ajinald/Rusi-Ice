import React from 'react'
import './orderVideos.css'
import {DefaultPlayer as Video} from 'react-html5video'
import Video1 from '../assets/videos/video1.mp4'
import Video4 from '../assets/videos/video4.mp4'
import Video3 from '../assets/videos/video3.mp4'
import Video5 from '../assets/videos/video5.mp4'
import Video6 from '../assets/videos/video6.mp4'
import Video2 from '../assets/videos/video2.mp4'
import 'react-html5video/dist/styles.css'

const OrderVideos = () => {
  return (
 
    <div className='vid-container'>
        <h1 className='video-heading'>Our Videos</h1>
        <div className='video-container'>
        <div className='video-card'>
          <Video>
<source src={Video1} type='video/webm'/>
      </Video>
    
    </div>
    <div className='video-card'>
          <Video>
<source src={Video2} type='video/webm'/>
      </Video>
    
    </div>
    <div className='video-card'>
          <Video>
<source src={Video3} type='video/webm'/>
      </Video>
    
    </div>
    <div className='video-card'>
          <Video>
<source src={Video4} type='video/webm'/>
      </Video>
    
    </div>
    <div className='video-card'>
          <Video>
<source src={Video5} type='video/webm'/>
      </Video>
    
    </div>
    <div className='video-card'>
          <Video>
<source src={Video6} type='video/webm'/>
      </Video>
    
    </div>
        </div>
      
    </div>
    
        
  )
}

export default OrderVideos
