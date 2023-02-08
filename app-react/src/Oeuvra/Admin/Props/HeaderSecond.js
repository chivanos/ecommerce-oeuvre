import React, { useEffect } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderSecond(props){

    const user = JSON.parse(localStorage.getItem("user-login"));
    const navigate = useNavigate();

    function logoutMe(){
        localStorage.clear();
        navigate('/signinadmin');
    }

    function profileUser(){
        navigate('/adminoprofile');
    }

    return (
        <>
            <section className="col-md-12">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h3 className="colo--colo">{props.title}</h3>
                </div>
                <div className="col-sm-3 text-center">
                    <div className="row">
                        <div className="col-sm-3">
                            <Link to={"/royaladmin/oeuvra"} 
                                className="link--home"
                            >
                                Royal Treasures
                            </Link>
                        </div>
                        <div className="col-sm-6">
                                <Link to={"/contemporaryadmin/oeuvra"} 
                                    className="link--home"
                                >
                                    Contemporary art
                                </Link>
                        </div>
                        <div className="col-sm-3">
                                {/* <Link to={"/adminhome"} 
                                    className="link--home"
                                >

                                </Link> */}
                                <NavDropdown title={user.name} 
                                    className="link--home"
                                >
                                    <NavDropdown.Item onClick={logoutMe}>
                                        Logout
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={profileUser}>
                                        Profile
                                    </NavDropdown.Item>
                                </NavDropdown>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}