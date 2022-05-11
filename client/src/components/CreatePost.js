import React, { useCallback, useEffect, useRef, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { createPost } from '../redux/actions/postsAction'

export const CreatePost = ({ openModal, setOpenModal }) => {

    const [ data, setData ] = useState({
        content: ''
    })
    const modalRef = useRef()
    const dispatch = useDispatch()
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            setOpenModal(false)
        }
    }
    const keyPress = useCallback( e => {
        if(e.key === 'Escape' && openModal){
            setOpenModal(false)
        }
    }, [setOpenModal, openModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    const animation = useSpring({
        config: {
            duration: 350,
        },
        opacity: openModal ? 1 : 0,
        transform: openModal ? `translateY(0%)` :  `translateY(-100%)`
    })
    const handelSubmit = () => {
        dispatch(createPost(data))
    }
  return (
     openModal ? (
            <div className='fixed inset-0 bg-black z-1 bg-opacity-50 overflow-hidden flex justify-center items-center' ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className='w-[500px] bg-white rounded'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-2xl m-2'>Create Post</h2>
                        <IoCloseSharp className='text-2xl m-2 cursor-pointer' onClick={() => setOpenModal(false)} />
                    </div>
                    <hr/>
                        <textarea className='w-full focus:outline-none px-2 mt-5 overflow-hidden' placeholder='Write something to post...' rows={5} 
                            onChange={(e) => setData({...data, content: e.target.value})}
                        />
                        <div className='relative py-4'>
                            { data.content ? (<button className=' absolute bottom-2 right-5 bg-blue-300 px-3 py-2 rounded-md hover:bg-blue-200 text-gray-100' onClick={handelSubmit} >post</button>) : 
                            (<button className=' absolute bottom-2 right-5 bg-gray-300 px-3 py-2 rounded-md' disabled >post</button>)}
                        </div>
                    </div>
                </animated.div>
            </div>
    ): null
  )
}
