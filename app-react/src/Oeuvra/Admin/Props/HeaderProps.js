import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderProps(props){


    
    return (
        <>
            <section className="col-md-12 py-5">
                <div className="col-md-12">
                    {/* <Button className="col-md-12 m-3" onClick={handleRemove}>X</Button> */}
                    <div className="col-md-12">
                        <Link to={"/adminuser"} title="Espace d'administrateur"
                            className="link--hleft"
                        >
                            <div className="col-md-12"><img src={`${props.image}`} className="image--admin"/></div>
                            <div className="col-md-12"><p>Ouevra</p></div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-12">
                    {props.loadhead}
                </div>
            </section>
        </>
    );
}