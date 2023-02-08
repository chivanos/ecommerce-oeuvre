import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function MyBodyTwo(){
    // const [image, setImage] = useState([
    //     "../imgaes/myimages/tunique.png",
    //     "../imgaes/myimages/17.Sac_.png",
    //     "../imgaes/myimages/25.Récade-1.png",
    //     "../imgaes/myimages/CYPRIEN-TOKOUDAGBA-3.png"
    // ]);
    // var pcarousel = document.getElementById('pcarousel');
    // var i = 1;

    // setInterval(function(){
    //     if(i == (image.length - 1)){i = 0;}
    //     pcarousel.src = image[i];
    //     i++;

    // },3000);

    return(
        <div className="col-sm-12 mt-3 style--bodyone">
            <div className="row">
                <Link to="/home/oeuvra/art" className="col-sm-6 style--cent p-5" id="">
                    <img src="../images/myimages/tunique.png" width={"400"} height={"400"} id="pcarousel"/>
                </Link>
                <div className="col-sm-6 mt-5 style--cent">
                    <h3 className="col-sm-12 mt-5">Discover your royal <br/> treasures from home</h3>
                    <h6 className="col-sm-12 mt-3">Here you have the <br/>royal treasures of Benin live</h6>
                </div>
            </div>
        </div>
    )
}

