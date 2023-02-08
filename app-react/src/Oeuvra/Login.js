import React, { useEffect } from "react";
import Body from "./Body";
import Signin from "./Connection/Signin";
import HeaderGeneral from "./ComponentProps/Header/HeaderGeneral";
import HeaderLogin from "./ComponentProps/Header/HeaderLogin";
import { useNavigate } from "react-router-dom";
import FooterContact from "./FooterContact";


export default function Login(){

    return(
        <>
            <div className="bg--bg py-5">
                <HeaderGeneral headhome={<HeaderLogin />} />
                <Body container={<Signin  />} />
                <FooterContact />
            </div>
        </>
    );
}