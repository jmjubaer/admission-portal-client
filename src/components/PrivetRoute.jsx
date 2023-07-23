/* eslint-disable react/prop-types */
import useAuthContext from "../Hooks/UseAuthContext";
import LoadingSpinner from "../pages/SheredPage/LoadingSpinner";

const PrivetRoute = ({children}) => {
    const {user,loading} = useAuthContext();
    if(user) {
        return children;
    }
    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
};

export default PrivetRoute;