import React from "react";
import MyBodyFour from "./MyBodyFour";
import MyBodyOne from "./MyBodyOne";
import MyBodyTree from "./MyBodyTree";
import MyBodyTwo from "./MyBodyTwo";



export default function BodyCorp(props){
    return(
        <>
            <section>
                {props.headhome}
                <MyBodyOne />
                <hr className="style--ligne" />
                <MyBodyTwo />
                <hr className="style--ligne" />
                <MyBodyTree />
                <hr className="style--ligne" />
                {/* <MyBodyFour /> */}

            </section>
            {/*  Ready to purchase? Enter your email or phone number */}
        </>
    );

}
