import React from 'react'
import { useSelector } from 'react-redux'

export const FollowingList = () => {
    const followingLists  = useSelector((state) => state.users.followingLists)
    
    
  return (
  
         <div className='w-[300px] bg-white  rounded-md  right-[80px]  sticky top-20  p-2'>
              <div className='mb-5 text-left ml-2 px-2'>Your following</div>
              {followingLists.map((followingList) => (
                <div key={followingList._id}>
                    <div className='flex m-2 p-2 space-x-3 cursor-pointer hover:bg-gray-200 rounded'>
                        <span className='flex-shrink-0 w-8 h-8 bg-blue-300 rounded-full'></span>
                        <span className='text-sm font-bold'>{followingList.name}</span>
                    </div>
                </div>
            ))}
         </div>  
        
  )
}
