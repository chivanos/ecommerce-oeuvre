import React from "react";


export default function HeaderManage(props){    

    return (
        <>            
            <div className="col-md-12 bg-h-lft">
                {props.header}
            </div>
        </>
    );
}