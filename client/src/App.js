import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './routes/privateRoute'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Signin } from './pages/Signin'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { followingLists } from './redux/actions/userAction';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(followingLists())
  }, [dispatch])

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
