import React from "react";
import { Link } from "react-router-dom";

export default function SessionBodyEntete(props){

    
    return (
        <>
            <section className="col-sm-12 yellow  bg-h-lft p-2">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-4">{props.link}</div>
                        <div className="col-sm-4 text-center"><h3>{props.titre}</h3></div>
                        <div className="col-sm-1">
                            {props.addlink}
                            {props.addtitle}
                        </div>
                        <div className="col-sm-1">
                            {props.updatelink}
                            {props.updatetitle}
                        </div>
                        <div className="col-sm-1">
                            {props.deletelink}
                            {props.deletetitle}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}