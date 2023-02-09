import React, {useEffect, useState} from 'react';

function MR360() {

    const [backendData, setBackendData] = useState(undefined)



    // useEffect(() => {
    //     fetch("http://localhost:5000/obtenerCalculoMr360").then(response => {
    //         if (!response.ok) {
    //           throw new Error(response.statusText)
    //         }
    //         return response.json()}).catch(err=>{
    //             console.log(err)
    //         }
    //     ).then(
    //         data => {
    //             setBackendData(data)
    //             console.log(data);
    //         }
    //     )
    // }, [])


    useEffect(() => {
        fetch("http://localhost:5000/obtenerCalculoMr360").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
                console.log(data);
            }
        )
    }, [])
    return(
        <div>
            {
                ( backendData === undefined) ? (
                <p>Loading...</p>
                ): (

                    <p > {backendData.id}</p>
                 )}

        </div>

    )
}

export default MR360