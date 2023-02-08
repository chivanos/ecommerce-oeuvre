import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableauCont(props){
    
        return (
            <>
                
                    <tr title={`${props.cont.title}`}>
                        <td>{props.id}</td>
                        <td>{props.cont.title}</td>
                        <td>
                            <img src={`http://localhost:8000/${props.cont.file}`} width={"30"} height={"30"} className="t-pic"/>
                        </td>
                        <td>{props.cont.category}</td>
                        <td>{props.cont.description}</td>
                        <td>{props.cont.author}</td>
                        <td>{props.cont.country}</td>
                        <td>
                            <Link to={`/view/cont/${props.id}`} className="btn btn-warning">Details</Link>
                            &nbsp;&nbsp;
                            <Button
                                onClick={(e) => props.handleDeleteMe(props.cont.id,e)} 
                                className="btn btn-danger"
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>Bilan</td>
                        <td colSpan={6}> au total</td>
                        <td>{props.cont.updated_at}</td>
                    </tr>
                
            </>
        );
}



