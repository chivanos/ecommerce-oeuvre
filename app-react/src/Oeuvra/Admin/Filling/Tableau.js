import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Tableau(props){
    
        return(
            <>
                <tr title={`${props.roy.title}`}>
                        <td>{props.id}</td>
                        <td>{props.roy.title}</td>
                        <td><img src={`http://localhost:8000/${props.roy.file}`} className="t-pic" width={"30"} height={"30"}/></td>
                        <td>{props.roy.category}</td>
                        <td>{props.roy.description}</td>
                        <td>{props.roy.author}</td>
                        <td>{props.roy.country}</td>
                        <td>
                            <Link to={`/view/roy/${props.roy.id}`} className="btn btn-warning">Details</Link>
                            &nbsp;&nbsp;
                            <Button
                                onClick={(e) => props.handleDeleteMe(props.roy.id,e)} 
                                className="btn btn-danger"
                            >
                                Delete
                            </Button>
                        </td>
                    </tr> 
                    <tr>
                    <td>Bilan</td>
                    <td colSpan={6}> au total</td>
                    <td>{props.roy.updated_at}</td>
                </tr>
            </>
        );
}



