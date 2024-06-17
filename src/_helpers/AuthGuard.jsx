import { Navigate } from 'react-router-dom'
import { accountServices } from '@/_services/Account.services';

const AuthGuard = ({ children }) => {


    if (!accountServices.isLogged()) {
        return <Navigate to='/login' />
    }
    return children
};

export default AuthGuard;