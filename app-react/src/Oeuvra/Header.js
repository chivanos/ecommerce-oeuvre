import React from "react";
import HeaderHome from "./ComponentProps/Header/HeaderHome";
import HeaderGeneral from "./ComponentPropsClient/HeaderClient/HeaderGeneralClient";


export default function Header(){


    return(
        <>
            <div><HeaderGeneral headhome={<HeaderHome/>} /></div>
        </>
    );
}