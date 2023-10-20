import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
   const {id, url} = useParams();
   
  return (
    <div>Post
       <h1>Post ID: {id}</h1>
      <p>URL: {url}</p>
    </div>
  )
}

export default Post