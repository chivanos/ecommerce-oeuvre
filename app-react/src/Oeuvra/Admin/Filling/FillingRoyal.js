import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Tableau from "./Tableau";


export default function FillingRoyal(){

    const [roy,setRoy] = useState([]);
    const [sup,setSup] = useState("");
    const [info,setInfo] = useState(false);
    const [loading,setLoading] = useState(false);
    
    setInterval(() => {
        setLoading(true)
    },3000);

    useEffect(() => {
        const fetchMe = async() => {
            await fetch("http://localhost:8000/api/list/roy/oeuvra")
            .then(data => data.json())
            .then(result => setRoy(result))
        }
        fetchMe();
    },[]);
    

    const handleDeleteMe = async (id,e) => {
        e.preventDefault();
            await axios.delete(`http://localhost:8000/api/delete/roy/${id}`)
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
                    <div className="col-ms-12 mt-5">
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
                                <th>Title</th>
                                <th>Image</th>
                                <th>Decription</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Country</th>
                                <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                roy.map((roy) => <Tableau key={roy.id} handleDeleteMe={(id,e) => handleDeleteMe(id,e)} roy={roy} id={roy.id}/>)
                            }
                            </tbody>
                        </Table>
                    </div>
                </section>
            </>
        );
    }
       
}



