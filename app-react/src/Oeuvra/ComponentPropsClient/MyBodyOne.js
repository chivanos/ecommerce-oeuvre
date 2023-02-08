import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function MyBodyOne(){
    // const [image, setImage] = useState([
    //     "../imgaes/myimages/12.Statue-Anthropomorphe.png",
    //     "../imgaes/myimages/2.roi-Glèlè-1.png",
    //     "../imgaes/myimages/13.Statue-Anthropo-Roi-Glèlè.png",
    //     "../imgaes/myimages/14.Statue-Anthropo-Roi-Béhanzin.png"
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
            <div className="col-sm-6 mt-5 style--cent">
                <h3 className="col-sm-12 mt-5">Discover your royal <br/> treasures from home</h3>
                <h6 className="col-sm-12 mt-3">Here you have the <br/>royal treasures of Benin live</h6>
            </div>
            <Link to="/home/oeuvra/royal" className="col-sm-6 style--cent p-5" id="">
                <img src="../images/myimages/12.Statue-Anthropomorphe.png" width={"400"} height={"400"} id="pcarousel"/>
            </Link>
            </div>
        </div>
    )
}

