import React from "react";
import HeaderProps from './Props/HeaderProps';
import HeaderLeftGenerale from './Props/HeaderLeftGenerale';


export default function HeaderLeftAdmin(props){    

    return (
        <>            
            <div className="col-md-12 py-5">
                <HeaderProps image={props.image} loadhead={props.loadhead} />
            </div>
        </>
    );
}