
import { Navigate, useLocation } from "react-router-dom";
import { UseAuth } from "./Auth";
const Requierdchildren = ({ children }) => {
    const auth = UseAuth()
    const Location = useLocation()

    if (!auth.user) {
        return <Navigate state={{ path: Location.pathname }} to={"/login"}></Navigate>
    }
    return children

}
export default Requierdchildren

