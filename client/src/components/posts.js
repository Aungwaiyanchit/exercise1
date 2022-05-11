import React from 'react'
import { useSelector } from 'react-redux'
import { Post } from './post'


export const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const isLoading = posts.isLoading
    
  return (
    isLoading ? (<div>Loading</div>) : (
         !posts ? ( <div>No posts</div>) : (
           <>
            <div>
            {posts.posts.map(post => (<Post key={post._id} post={post}/>))}
            </div>
           </>
         ))
    )
}
