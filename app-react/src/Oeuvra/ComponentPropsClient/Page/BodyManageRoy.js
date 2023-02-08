import React, { useEffect, useState } from "react";
import BodyProps from "./BodyProps";
import BodySc from "./BodySc";
import FooterSc from "./FooterSc";
import HeaderSc from "./HeaderSc";


export default function BodyManageRoy(props){

    const [roy,setRoy] = useState([]);
    let url = props.url

    useEffect(()=>{
        const fetchMe = async () => {
            await fetch(`http://localhost:8000/api/list/roy/oeuvra`)
            .then((res) => res.json())
            .then(result => setRoy(result))
        }
        fetchMe();
    })
    return(
        <>
            <div className="col-sm-12">
                <HeaderSc />
                <BodyProps content={<BodySc roy={roy} url={url} />} />
                <FooterSc data={Date('y')} />
            </div>
        </>
    );
}