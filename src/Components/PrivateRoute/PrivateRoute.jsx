import { Redirect, Route } from "react-router";
import { useAuth } from "../Auth/useAuth";

const PrivateRoute = ({children,...rest})=>{
    const auth = useAuth();
    console.log(auth);
    return(
        <Route
            {...rest}
            render = {({location}) =>
            auth.user ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state:{from:location}
                    }}
                />
            )
        }
        />
    );
}
export default PrivateRoute;