import { Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const location = useLocation();
  return isLoggedIn
    ? children
    : <Redirect to="/" state={{ from: location }} />
};

export default ProtectedRoute;