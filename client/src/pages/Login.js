import React, { useEffect, useState } from 'react'
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authAction'

export const Login = () => {

  const [ showPass, setShowPass ] = useState(false)
  const [ formData , setFormData ] = useState({
    email: '', password: ''
  })
  const auth = useSelector((state) => state.auth.isAuthenticate)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(auth);
  useEffect(() => {
    if(auth){
      navigate('/')
    }
  },[auth, navigate])

  const handelShow = (e) => {
    setShowPass(!showPass)
  }

  const handelSubmit = () => {
      dispatch(login(formData, navigate))
      console.log('asfsad');
  }
  return (
    <div className='main'>
      <div className='container'>
      <div className='item-container'>
        <h2 className='login'>Login</h2>
      </div>
      <form>
        <div className='form-input'>
          <label  className='label'>Email</label>
          <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
        </div>
        <div className='form-input'>
          <label  className='label'>Password</label>
          <input type={ showPass? 'text' : 'password'} onChange={(e) => setFormData({...formData, password:e.target.value })}/>
          {
            showPass ? 
              (<IoEyeOffSharp className='icon' onClick={handelShow}/>) 
            : (<IoEyeSharp className='icon' onClick={handelShow}/>)
          }
        </div>
        <a href='#' className='forgetPass'>Forgot password</a>
        <div className='buttons'>
          <button type='submit' onClick={handelSubmit}>Login</button>
          <span>or</span>
          <button  className='btnCreateAcc'>Create new account</button>
        </div>
      </form>
    </div>
    </div>
  )
}
