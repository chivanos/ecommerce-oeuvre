import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Box from "./Box";
import { useNavigate } from "react-router-dom";

export default function FillingMailBox(){

    const [mail,setMail] = useState([]);
    const [loading,setLoading] = useState(false);
    const [sup,setSup] = useState("");
    const [info,setInfo] = useState(false);
    const navigate = new useNavigate();
    
    setInterval(() => {
        setLoading(true)
    },3000);

    useEffect(() => {
        
        const fetchBox = () => {           
            fetch("http://localhost:8000/api/contact/receive")
            .then(data => data.json())
            .then(result => setMail(result))
        }
        fetchBox();
        
    },[])
  
    const handleDeleteMe = async (id,e) => {
        e.preventDefault();
            await axios.delete(`http://localhost:8000/api/delete/contact/${id}`)
            .then((response) => {
                if(!response.data.error){
                    setTimeout(() => {
                        setInfo(false)
                        setSup("Suppression en cour...")
                    },1000)
                    setTimeout(() => {
                        setInfo(true)
                        setSup(response.data.success)
                    },5000)
                    // navigate('/mailboxadmin/oeuvra')
                }
                else{
                    setTimeout(() => {
                        setInfo(false)
                        setSup("Suppression en cour...")
                    },1000)
                    setTimeout(() => {
                        setInfo(true)
                        setSup(response.data.error)
                    },5000)
                    // navigate('/mailboxadmin/oeuvra')
                }
            })
            
    }

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
                        <div className="col-sm-10 mt-3"> 
                            {
                                info === false 
                                ?
                                <h3 className="col-sm-12 text-center">{sup}</h3> 
                                : 
                                <h3 className="col-sm-12 text-center">{sup}</h3>
                            }
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                    <th>id</th>
                                    <th>Email</th>
                                    <th>Mail</th>
                                    <th>Reçu le</th>
                                    <th>Option</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    mail.map((mail) => <Box key={mail.id} handleDeleteMe={(id,e) => handleDeleteMe(id,e)} mail={mail} id={mail.id}/>)
                                }
                                </tbody>
                            </Table>
                        </div>
                    </section>
            </>
        );
    }
        



}

{/* <div className="col-md-12 py-5 text-center">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">Reçu le:</div>
                                <div className="col-sm-8">{mail.created_at}</div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">Expéditeur</div>
                                <div className="col-sm-8">{mail.email}</div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">Contenue</div>
                                <div className="col-sm-8">{mail.mail}</div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">Temps écoulés</div>
                                <div className="col-sm-8">Il y a 2 jour...</div>
                            </div>
                        </div>
                    </div>
          */}