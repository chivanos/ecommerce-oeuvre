import React from "react";
import { Link } from "react-router-dom";




export default function MyBodyTree(){


    return(
        <div className="col-sm-12 mt-3 style--homeone">
            <div className="row">
                <div className="col-sm-6 mt-5 style--cent">
                    <h3 className="col-sm-12 mt-5">Discover your galery art <br/> to Oeuvra</h3>
                    <h6 className="col-sm-12 mt-3">Here you have the <br/>royal treasures of Benin live</h6>
                </div>
                <Link to="" className="col-sm-6 style--cent">
                    <video src="../videos/React-App-Ouevra.mp4"  controls className="form--video" ></video>
                </Link>
            </div>
        </div>
    )
}