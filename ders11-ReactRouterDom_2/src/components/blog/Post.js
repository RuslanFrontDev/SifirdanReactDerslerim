import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
   const {id, url} = useParams();
   
  return (
    <div>Post
      <h1>{id}---{url}</h1>
    </div>
  )
}

export default Post