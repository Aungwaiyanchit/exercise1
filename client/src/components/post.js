import React, { useState } from 'react'
import moment from 'moment'

import { IoChevronDownOutline, IoThumbsUpOutline, IoPaperPlaneOutline, IoChatboxOutline } from 'react-icons/io5'



export const Post = ({post, children}) => {
    
  const [ openComment , setOpenComment ] = useState(false)

  return (
    <div className='w-[500px] border-[1px] shadow-lg bg-white mb-5 rounded-lg'>
      <div className='flex justify-between p-2'>
        <div className='flex items-center'>
          <span className='flex-shrink-0 w-8 h-8 bg-blue-300 rounded-full'></span>
          <div className='flex flex-col '>
            <span className='text-[14px] font-bold hover:underline'><a href='#'>{post.postedBy.name}</a></span>
            <span className='text-[10px] ml-3'>{moment(post.created).fromNow()}</span>
          </div>
        </div>
        <IoChevronDownOutline className='icon'/>
      </div>
      <p className='flex items-center p-5 text-sm'>{children}{post.content}</p>
      { post.image ? ( <img src=""  className=' aspect-[1/1] w-full'/> ): null}
      <hr className='m-1'/>
      <div className='flex  ml-2 justify-between m-1 h-8 text-gray-600 rounded'>
        <button className='w-full flex items-center justify-center text-sm hover:bg-gray-200'><IoThumbsUpOutline className='text-lg mr-1'/>Like</button>
        <button className='w-full flex items-center justify-center text-sm hover:bg-gray-200' onClick={() => setOpenComment(!openComment)}><IoChatboxOutline className='text-lg mr-1' />comment</button>
        <button className='w-full flex items-center justify-center text-sm hover:bg-gray-200'><IoPaperPlaneOutline className='text-lg mr-1'/>share</button>
      </div>
      {
        openComment ? (
          <>
          <hr className='m-1'/>
          <div className='flex space-x-2 p-2'>
            <span className='flex-shrink-0 w-8 h-8 bg-blue-300 rounded-full'></span>
            <input className='w-full bg-gray-100 focus:outline-none px-2 rounded-2xl shadow-sm' placeholder='Write a comment'/>
          </div> 
          </>
        ): null
      }
      
    </div>
  )
}
