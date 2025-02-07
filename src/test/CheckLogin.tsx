import { Navigate } from "react-router-dom";

const CheckLogin = (WrappedComponent:React.FC) => {
  return (props:any) => {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default CheckLogin;
