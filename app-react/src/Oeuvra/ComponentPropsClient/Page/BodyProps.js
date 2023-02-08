import React from "react";


export default function BodyProps(props){
    return(
        <>
            <div className="m-5 props--body">
                {props.content}
            </div>
        </>
    );
}