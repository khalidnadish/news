import { Typography } from '@mui/material'
import React from 'react'
import "./newscard.css"
function NewsCard({newsdata}) {
  return (
    <>
    <div className="cardcontiner">
    <div>
        <Typography color={'common.white'}>  {newsdata.publishedAt}</Typography>
        <Typography color={'common.white'}>  {newsdata.title}</Typography>
    </div>
    <div className='image_container'>
        <img src={newsdata.urlToImage} className='img_css'/>
    </div>
    <Typography color={'common.white'}>  {newsdata.description}</Typography>
    <Typography color={'common.white'}>  {newsdata.url}</Typography>
    </div>
    
    
    </>
  )
}

export default NewsCard