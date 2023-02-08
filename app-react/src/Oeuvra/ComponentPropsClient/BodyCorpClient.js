import React from "react";
import MyBodyFour from "./MyBodyFour";
import MyBodyOne from "./MyBodyOne";
import MyBodyTree from "./MyBodyTree";
import MyBodyTwo from "./MyBodyTwo";
import MyBodyFive from "./MyBodyFive";



export default function BodyCorpClient(props){
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
                <MyBodyFive />

            </section>
            {/*  Ready to purchase? Enter your email or phone number */}
        </>
    );

}
