import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../../apiUrl';
import { Navigate , useParams } from 'react-router-dom';

function Verifyuser()
{
    const params = useParams();

    useEffect(()=>{
        var updateDetails={"condition":{"email":params.email,"__v":0},"set":{"status":1,"__v":1}};
        axios.patch(_apiURLUser+"update",updateDetails).then((result)=>{
            console.log("User verified successfully....");
            console.log(result);            
        });
     },[]);


    return(
    <div>
        <Navigate to='/' />
    </div>
    );
}

export default Verifyuser;