import React, { useEffect, useState } from "react";
import BodyProps from "./BodyProps";
import BodySc from "./BodySc";
import FooterSc from "./FooterSc";
import HeaderSc from "./HeaderSc";


export default function BodyManageCont(props){

    const [cont,setCont] = useState();
    let url = props.url

    useEffect(()=>{
        const fetchMe = async () => {
            await fetch(`http://localhost:8000/api/list/cont/oeuvra`)
            .then((res) => res.json())
            .then(result => setCont(result))
        }
        fetchMe();
    })
    return(
        <>
            <div className="col-sm-12">
                <HeaderSc />
                <BodyProps content={<BodySc cont={cont} url={url} />} />
                <FooterSc data={Date('y')} />
            </div>
        </>
    );
}