import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { fireContext } from "./AuthContext";



const PrivateRoute = ({children}) => {
     
    const {users, loading} = useContext(fireContext)

    if(loading){

        return <div>

            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>

        </div>
    }

    if(users){
      
        return children

    }


    return <Navigate to='/login' ></Navigate>
};

export default PrivateRoute;