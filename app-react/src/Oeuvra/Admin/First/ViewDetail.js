import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Filling from "../Filling/Filling";
import FillingRoyal from "../Filling/FillingRoyal";
import FillingView from "../Filling/FillingView";
import AddRoy from "../Filling/Royal/AddRoy";
import Manage from "../Manage";
import HeaderLeftGenerale from "../Props/HeaderLeftGenerale";
import HeaderSecond from "../Props/HeaderSecond";

export default function ViewDetails(props){    
    const [content,setContent] = useState([]);
    let params = useParams();
    let url=`http://localhost:8000/api/details/contact/${params.id}`;


    useEffect(()=> {
        const fetchAll = async() => {
            await fetch(`http://localhost:8000/api/details/contact/${params.id}`)
            .then(response => response.json())
            .then(result =>  setContent(result))
        }
        fetchAll();
    },[]);
console.warn(content)
    

    return (
        <>
            <div className="col-md-12">
                <Manage 
                    header={<HeaderSecond title={"Mail Details"} />}
                    loadhead={<HeaderLeftGenerale />}
                    link={
                        <Link to={"/adminuser"} className="lie--tw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lien--tela bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </Link>
                    }
                    titre={"Details"}
                    composant={<Filling dashboard={<FillingView contain={content} params={params.id} url={"contact"}  />}/>}
                    image={"../images/img1.jpg"}
                    addlink={<Link to={"/rt/oeuvra/add"} className="lie--tw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="lie--tela bi bi-plus-circle-fill lie--tel" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                        </Link>
                    }
                    addtitle={<span>Add</span>}
                    
                    updatelink={<Link to={""} className="lie--tw">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lie--tela bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Link>}
                    updatetitle={<span>Update</span>}

                    deletelink={<Link to={""} className="lie--tw">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lie--tela bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Link>}
                    deletetitle={<span>Delete</span>}
                />
            </div>
        </>
    );
}