import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Box(props){
    

    return (
        <>                        

            <tr title={`${props.id}`}>
                <td>{props.id}</td>
                <td>{props.mail.email}</td>
                <td>{props.mail.mail}</td>
                <td>{props.mail.created_at}</td>
                <td>
                    <Link to={`/view/oe/${props.id}`} className="btn btn-warning">Details</Link>
                    &nbsp;&nbsp;
                    <Button
                        onClick={(e) => props.handleDeleteMe(props.mail.id,e)} 
                        className="btn btn-danger"
                    >
                        Delete
                    </Button>
                </td>
            </tr>
            <tr>
            <td>Bilan</td>
            <td colSpan={3}>au total</td>
            <td>{props.mail.updated_at}</td>
            </tr>
        </>
    );
}


            {/* <div className="text--me m-3">
            <Tab.Container title={`${props.id}`} defaultActiveKey="first">
            <Row>
                <Col sm={4}>
                <Nav variant="pills" className="flex-column m-3">
                    <Nav.Item>
                    <Nav.Link eventKey="">{props.id}</Nav.Link>
                    Reçu le {props.mail.created_at}
                    </Nav.Item>
                </Nav>
                </Col>
                <hr id="c--tiret"/>
                <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <section title="">
                        <div className="col-md-12 py-1 text-center">
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-4"><p><u>Expéditeur</u></p></div>
                                            <div className="col-sm-8">{props.mail.email}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-4"><p><u>Contenue</u></p></div>
                                            <div className="col-sm-8">{props.mail.mail}</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-2">
                                        <div className="row">
                                            <div className="col-sm-4"><p><u>Temps écoulés</u></p></div>
                                            <div className="col-sm-8">Il y a 2 jour...</div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div> */}