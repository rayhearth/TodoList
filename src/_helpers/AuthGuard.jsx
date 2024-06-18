import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {

    const isAuthentificated = useSelector(state => state.auth.isAuthentificated)

    if (!accountServices.isLogged()) {
        return <Navigate to='/login' />
    }
    return children
};

export default AuthGuard;