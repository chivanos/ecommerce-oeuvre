import React from "react";
import HeaderFirst from "./HeaderFirst";
import HeaderManage from "./HeaderManage";
import HeaderSecond from "./HeaderSecond";


export default function HeaderScroll(props){

    

    return (
        <>
            <section className="col-md-12 p-3 mon--style--header head--scroll">
                <div className="col-sm-12">
                    <HeaderFirst />
                </div>
                <div className="col-sm-12">
                    <HeaderManage  header={props.header} />
                </div>
            </section>
        </>
    );
}