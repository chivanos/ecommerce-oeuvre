import React from "react";
import HeaderHomeClient from "./ComponentPropsClient/HeaderClient/HeaderHomeClient"
import HeaderGeneralClient from "./ComponentPropsClient/HeaderClient/HeaderGeneralClient";




export default function HeaderClient(){
    return(
        <>
            <div><HeaderGeneralClient headhome={<HeaderHomeClient/>} /></div>
        </>
    );
}

