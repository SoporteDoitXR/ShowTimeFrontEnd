import { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import { Navigate } from 'react-router-dom';
import { tokenRefreshAuth } from "../providers/auth";
import { Outlet } from "react-router";

const PrivateRoute = ({children}) => {
    const cookies = new Cookies();
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      const auth = async () => {
        let token = cookies.get("token");
        if(token){
          let prueba;
          tokenRefreshAuth(token)
          .then((data) => data.json())
          .then((response) => {
            if (response.token) {
              console.log(response);
              saveToken(response.token);
              setAuthenticated(true);
              console.log("refresh");
              prueba = true;
            } else if(response.message === "The token has no expired"){
              console.log(response);
              setAuthenticated(true);
              console.log("no expired");
              prueba = true;
            }else{
              setAuthenticated(false);
              console.log("expired");
              prueba = false;
            }
          });
          return prueba;
        }else{
          setAuthenticated(false);
          console.log("no token");
          prueba = false;
          return prueba;
        }
      }
      auth();
    }, [])
  
    if(authenticated){
      // Renders 'wait' until isLogged is resolved with the data.
      return (<h1>Wait...</h1>);
    }
    return authenticated ? <Outlet /> : <Navigate to="/login" />
  }

  export default PrivateRoute
  