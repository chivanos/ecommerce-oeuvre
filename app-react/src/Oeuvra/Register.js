import React, { useEffect } from "react";
import Body from "./Body";
import Signup from "./Connection/Signup";
import HeaderGeneral from "./ComponentProps/Header/HeaderGeneral";
import HeaderRegister from "./ComponentProps/Header/HeaderRegister";
import { useNavigate } from "react-router-dom";
import FooterContact from "./FooterContact";

    export default function Register(){

        const history = useNavigate();
    
        useEffect(() => {
            if(localStorage.getItem('user-inf'))
            {
                history("/adminuser");
            }
        },[]);

        return(
            <>
                <div className="bg--bg py-5">
                    <HeaderGeneral headhome={<HeaderRegister />} />
                    <Body container={<Signup  />} />
                    <FooterContact />
                </div>
            </>
        );


    }