import React from "react";
import HelpComponentAdmin from "./HelpAdmin/HelpComponentAdmin";


export default function HelpAdmin(){
    return(
        <>
            <div className="col-sm-12 mt-3 container">
                <div className="row">
                    <h1 className="col-sm-10 forme--text"><Link to={'/'} className="header--title">Oeuvra</Link></h1>
                    <h1 className="col-sm-2"></h1>
                </div>
            </div>
            <Body container={<HelpComponentAdmin  />} />
        </>
    );
}