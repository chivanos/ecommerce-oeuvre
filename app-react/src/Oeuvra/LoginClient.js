import React from "react";
import BodyClient from "./BodyClient";
import SigninClient from "./ConnectionClient/SigninClient";
import HeaderGeneralClient from "./ComponentPropsClient/HeaderClient/HeaderGeneralClient";
import HeaderLoginAchat from "./ComponentPropsClient/HeaderClient/HeaderLoginAchat";


export default function LoginClient(){
    return(
        <>
            <HeaderGeneralClient headhome={<HeaderLoginAchat />} />
            <BodyClient container={<SigninClient  />} />
        </>
    );
}