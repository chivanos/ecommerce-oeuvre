import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';




export default function FillingView(props){
    const [loading,setLoading] = useState(false);
    let url = props.url;

    
    setInterval(() => {
        setLoading(true)
    },5000);



    // function fetchUniqueProfile(id){
    //     fetch(`http://localhost:8000/details/cont/${id}`)
    //     .then(response => response.json())
    //     .then(result => setContent(result))
    // }
    // function fetchUniqueProfile(id){
    //     fetch(`http://localhost:8000/details/roy/${id}`)
    //     .then(response => response.json())
    //     .then(result => setContent(result))
    // }

        
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

        if(url == "roy"){
            return(
                <>
                    <section className="over text-center">
                        <div className="col-md-12 py-5">
                            <div className="row">
                                <div className="col-sm-6 image-st">
                                    <img src={`http://localhost:8000/${props.contain.file}`} className="col-sm-12"/>
                                </div>
                                <div className="col-sm-6">
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Title:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.title}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Category:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.category}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Author:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.author}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Country:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.country}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Description:</strong>
                                            </u>&nbsp;&nbsp;
                                            <p className='text-left'>
                                                {props.contain.description}
                                            </p>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
        else if(url == "cont"){
        // else{
            return(
                <>
                                        <section className="over text-center">
                        <div className="col-md-12 py-5">
                            <div className="row">
                                <div className="col-sm-6 image-st">
                                    <img src={`http://localhost:8000/${props.contain.file}`} className="col-sm-12"/>
                                </div>
                                <div className="col-sm-6">
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Title:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.title}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Category:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.category}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Author:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.author}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Country:</strong>
                                            </u>&nbsp;&nbsp;
                                            {props.contain.country}
                                        </h1>
                                    </div>
                                    <hr />
                                    <div className='col-md-12'>
                                        <h1>
                                            <u>
                                                <strong>Description:</strong>
                                            </u>&nbsp;&nbsp;
                                            <p className='text-left'>
                                                {props.contain.description}
                                            </p>
                                        </h1>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
        else if(url == "contact"){

            return(
                <>
                    <section className="">
                        <div className="col-md-4 offset-sm-4 py-5">
                            <div className="col-sm-12">
                                <h1 className="col-sm-12">
                                    {props.contain.email}
                                </h1>
                                <hr/>
                                <h1 className="col-sm-12">
                                    {props.contain.mail}
                                </h1>
                                <hr/>
                                <a href={`mailto:${props.contain.email}`} className="col-sm-12 btn btn-primary">
                                  Contact
                                </a>
                            </div>
                        </div>
                    </section>
                </>
            );
        }
        else{
            return(
                <>
                    <section className="over">
                        <div className="col-md-6 py-5">
                            <div className="col-sm-12">
                                {/* <h1>{content.message}</h1> */}
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
}