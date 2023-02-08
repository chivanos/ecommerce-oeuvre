import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Protected(props){

    
    const [loading,setLoading] = useState(false);
    const history = useNavigate();
    setInterval(() => {
        setLoading(true)
    },5000);

    useEffect(() => {
        if(!localStorage.getItem('user-login'))
        {
            history('/signinadmin');
        }

    },[])



    if(loading === false){
        return(
            <>
                <div className="pre">
                    <h5>Chargement de la page d'administration</h5>
                    <span id="lo"></span>
                </div>
            </>
        );
    }
    else{
    return (
        <>
            <div> {props.Secure} </div>
        </>
    );
    }
}