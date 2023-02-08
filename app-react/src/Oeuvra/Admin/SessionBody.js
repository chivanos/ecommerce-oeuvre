import React from "react";
import SessionBodyEntete from './SessionBodyEntete';
import SessionBodyContainer from './SessionBodyContainer';




export default function SessionBody(props){
    return (
        <>
            <section className="">
                <SessionBodyEntete link={props.link} titre={props.titre} 
                addlink={props.addlink} addtitle={props.addtitle}
                updatelink={props.updatelink} updatetitle={props.updatetitle}
                deletelink={props.deletelink} deletetitle={props.deletetitle}/>
                
                
                <SessionBodyContainer composant={props.composant} />
            </section>
        </>
    );
}