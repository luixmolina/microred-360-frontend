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
          
            if(data.status === 'success'){

                 authUser2.current =true
                 setisAuthWaiting(false)
                 
                 setauthUser(true);
                

            } else {
              

            }
        }
        
        populateQuote();

    }, [isAuthWaiting])

    return(
        <>
    

        {  isAuthWaiting ?  <Login /> : authUser2.current ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}

export default PrivateRoutes