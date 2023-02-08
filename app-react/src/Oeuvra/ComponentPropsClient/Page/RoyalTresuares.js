import React from "react";
import BodyManageRoy from "./BodyManageRoy";


export default function RoyalTresuares(){
    return(
        <>
            <div className="col-sm-12">
                <BodyManageRoy
                    url={`http://localhost:8000/api/list/roy/oeuvra`}
                />
            </div>
        </>
    );
}