import React, { useEffect } from "react";
import Body from "./Body";
import HeaderGeneral from "./ComponentProps/Header/HeaderGeneral";
import { useNavigate } from "react-router-dom";
import ContactMe from './ContactMe'
import HeaderContact from "./HeaderContact";
import FooterContact from "./FooterContact";


export default function Contact(){

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
                <HeaderGeneral headhome={<HeaderContact />} />
                <Body container={<ContactMe  />} />
                <FooterContact />
            </div>
        </>
    );
}






