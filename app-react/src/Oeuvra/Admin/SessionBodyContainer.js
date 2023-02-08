import React from "react";
import HeaderLeftAdmin from "./HeaderLeftAdmin";
import SessionBody from './SessionBody';

export default function SessionBodyContainer(props){
    return (
        <>
            <section className="body--style">
                {props.composant}
            </section>
        </>
    );
}