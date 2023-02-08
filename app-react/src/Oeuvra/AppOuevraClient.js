import React from "react";
import HeaderClient from './HeaderClient';
import BodyClient from './BodyClient';
import 'react-bootstrap/dist/react-bootstrap';
import BodyCorpClient from "./ComponentPropsClient/BodyCorpClient";


export default function AppOeuvra(){
    return(
        <>
            <div className="bg--bg">
                <HeaderClient />
                <BodyClient container={<BodyCorpClient/>} className="body--pd"/>
                {/* <BodyClient /> */}
            </div>
        </>
    );
}
