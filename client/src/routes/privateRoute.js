import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const PrivateRoute = ({ children }) => {
    const isAuthenticate = useSelector((state) => state.auth.isAuthenticate)

    return isAuthenticate ? children : <Navigate to="/login"/>
}
