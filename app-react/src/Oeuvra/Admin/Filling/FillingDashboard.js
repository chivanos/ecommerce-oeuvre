import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FillingDashboard(){

    const [loading,setLoading] = useState(false);
    
    setInterval(() => {
        setLoading(true)
    },3000);

    
    if(loading === false){
        return(
            <>
                <div className="mail--style">
                    <h5>Patientez un instant...</h5>
                    <span id="mail--load"></span>
                </div>
            </>
        );
    }
    else{
        return (
            <>
                <section>
                    <div className="col-md-12 py-5 text-center">
                        <h1 className="col-sm-12">
                            Bienvenue Dans Votre Espace D'Administrateur
                        </h1>
                    </div>

                    <div className="col-md-12 py-5 text-center">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className="col-md-12 txt--l" to="/royaladmin/oeuvra">
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="200px" src="../../images/myimages/tunique.png" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br/>Tresuares Royal
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link className="col-md-12 txt--l" to="/contemporaryadmin/oeuvra">
                                    <figure className="col-md-12 ">
                                        <div>
                                            <img width="300px" height="200px" src="../../images/myimages/Roi-Guézo-1.png" />
                                        </div>
                                        <figcaption className="col-md-12" align="center">
                                            <br/>Contemporary Art
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}