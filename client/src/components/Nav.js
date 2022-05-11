import React from 'react'

export const Nav = () => {
  return (
    <div className='fixed inset-x-0 z-10 top-0 shadow-md py-3 bg-white'>
        <div className='flex justify-around'>
            <span className='text-2xl'>Logo</span>
            <div className='space-x-3 text-sm'>
                <span>Home</span>
                <span>Message</span>
                <span>Notifications</span>
            </div>
        </div>
    </div>
  )
}
