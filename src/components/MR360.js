import React, {useEffect, useState} from 'react';

function MR360() {

    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:5000/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])
    return(
        <div>

            {(typeof backendData.users === 'undefined') ? (
                <p>Loading...</p>
            ): (
                backendData.users.map((user, index) => (

                    <p key={index}> {user}</p>
                    ))
            )
            }

        </div>

    )
}

export default MR360