import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

const ProtectedRoute = ({ children, onlyBiz = false }) => {
  const { user } = useAuth();

  if (!user || (onlyBiz && !user.biz)) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
