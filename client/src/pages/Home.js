import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNewfeeds } from '../redux/actions/postsAction'
import { Posts } from '../components/posts'
import { Nav } from '../components/Nav'

import { IoSadOutline, IoImages, IoVideocam } from 'react-icons/io5'
import { FollowingList } from '../components/FollowingList'
import { CreatePost } from '../components/CreatePost'

export const Home = () => {
  
  const dispatch = useDispatch()
  const [ openModal, setOpenModal ] = useState(false)

  useEffect(() => {
    dispatch(fetchNewfeeds())
  },[dispatch])

  return (
   <>
    <Nav/>
     <div className='flex justify-center space-x-10 mt-20'>
         <div>
              <div className='w-[500px] bg-white  rounded-lg shadow-lg mb-5' >
                <div className='flex space-x-3 p-2'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-300 rounded-full'></div>
                  <div className='h-10 flex items-center px-2 rounded-3xl cursor-pointer bg-gray-100 hover:bg-gray-200 w-full ' onClick={() => setOpenModal(true)}>Write something to post.....</div>
                </div>
                <hr className='m-1'/>
                <div className='flex justify-evenly items-center p-2'>
                  <div className='flex items-center space-x-2 hover:bg-gray-100 w-full p-2 cursor-pointer rounded'>
                    <IoVideocam className='text-2xl text-red-600'/>
                    <span className='font-medium text-[16px]'>Live video</span>
                  </div>
                  <div className='flex items-center space-x-2 hover:bg-gray-100 w-full p-2 cursor-pointer rounded'>
                    <IoImages className='text-2xl text-green-600'/>
                    <span  className='font-medium text-[16px]'>Photo/video</span>
                  </div>
                  <div className='flex items-center space-x-2 hover:bg-gray-100 w-full p-2 cursor-pointer rounded'>
                    <IoSadOutline className='text-2xl text-yellow-600'/>
                    <span  className='font-medium text-[16px]'>Felling/activities</span>
                  </div>
               </div>
         </div>
         <Posts />
        </div>
       <div>
        <FollowingList/>
       </div>
    </div>
    <CreatePost openModal={openModal} setOpenModal={setOpenModal}/>
   </>
  )
}
