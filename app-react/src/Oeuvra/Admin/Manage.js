import React from "react";
import HeaderLeftAdmin from "./HeaderLeftAdmin";
import HeaderScroll from "./Props/HeaderScroll";
import SessionBody from './SessionBody';
import FooterScroll from './FooterScroll';


export default function Manage(props){


    return (
        <>
            <section className="style--administration">
                <div className="row">
                    <div className="col-sm-1  hla  bg--stk py-5">
                        <HeaderLeftAdmin image={props.image} loadhead={props.loadhead} />
                    </div>
                    <div className="col-sm-11 content--scroll">
                        <div className="col-sm-12 line">
                            <HeaderScroll header={props.header} />    
                        </div>
                        <div className="col-sm-12 bg--stl outline">
                            <SessionBody link={props.link} titre={props.titre} 
                            addlink={props.addlink} addtitle={props.addtitle}
                            updatelink={props.updatelink} updatetitle={props.updatetitle}
                            deletelink={props.deletelink} deletetitle={props.deletetitle}
                            composant={props.composant} />
                        </div>     
                    </div> 
                    {/* <div className="col-sm-12">
                        <FooterScroll header={props.header} />    
                    </div> */}
                </div>  
            </section>
        </>
    );
}