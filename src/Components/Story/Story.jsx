import React from 'react'
import './Story.css'
import story_img from '../Assets/Story.jpg'

const Story = () => {
  return (
    <div className='container'>
        <div className='story'>
        <div className="story1">
            <p>
            Namaste and welcome to Liquor Studio – your go-to destination for premium spirits. Discover our carefully curated selection of fine liquors sourced from diverse regions. With our user-friendly interface and seamless checkout process, finding and purchasing your favorite drinks has never been simpler
            </p>
        </div>
        <div className="story_img">
            <img src={story_img}/>
        </div>
        
        </div>
    </div>
  )
}

export default Story
