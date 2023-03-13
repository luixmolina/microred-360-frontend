import { Outlet, Navigate } from "react-router-dom";
import React , { useEffect, useState,useRef} from 'react';
import Login from './Login';


const PrivateRoutes = () => {


    const [isAuthWaiting, setisAuthWaiting] = useState(true);
    const [authUser, setauthUser] = useState(false);
    const authUser2 = useRef(false)

     useEffect(() => {
        
        async function populateQuote(){

            const req = await fetch('http://localhost:5000/reviewToken', {
                headers: {'x-access-token': localStorage.getItem('token'),
            },
            })
    
            const data = await req.json()
            console.log(data)
            if(data.status === 'success'){

                 authUser2.current =true
                 setisAuthWaiting(false)
                 console.log(authUser2);
                 setauthUser(true);
                 console.log("prueba")

            } else {
              console.log(data.error)

            }
        }
        
        populateQuote();

    }, [isAuthWaiting])

    return(
        <>
        {console.log(authUser2)}

        {  isAuthWaiting ?  <Login /> : authUser2.current ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

export default PrivateRoutes