import { Navigate} from 'react-router-dom';

type PrivateRouteProps = {
    children: React.ReactNode
    isAuthenticated: boolean
    path: string
}

const PrivateRoute = ({ children, isAuthenticated, path }: PrivateRouteProps) => {
    return isAuthenticated ? children : <Navigate to={path} />;
};

export default PrivateRoute