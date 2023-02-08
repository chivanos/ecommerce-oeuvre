import React from "react";
import Body from "./Body";
import Signup from "./Connection/Signup";
import HeaderGeneral from "./ComponentProps/Header/HeaderGeneral";
import HeaderRegister from "./ComponentProps/Header/HeaderRegister";


    export default function RegisterClient(){
    
    
        return(
            <>
                <HeaderGeneral headhome={<HeaderRegister />} />
                <Body container={<Signup  />} />
            </>
        );


    }