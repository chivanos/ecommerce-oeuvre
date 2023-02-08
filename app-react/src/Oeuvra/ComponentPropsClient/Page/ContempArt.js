import React from "react";
import BodyManageCont from "./BodyManageCont";


export default function ContempArt(){
    return(
        <>
            <div className="col-sm-12">
                <BodyManageCont
                    url={`http://localhost:8000/api/list/cont/oeuvra`}
                />
            </div>
        </>
    );
}