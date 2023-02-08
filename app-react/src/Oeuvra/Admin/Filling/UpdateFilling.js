import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import axios from 'axios';




export default function FillingView(props){
    const content = props.content
    const [loading,setLoading] = useState(false);
    let url = props.url;
    const [objet,setObjet] = useState({
        title:'',
        category:'',
        description:'',
        author:'',
        country:''
    });
    const [image,setImage] = useState({
        picture: ''
    });
    const[info,setInfo] = useState(false);
    const[status,setStatus] = useState(false);


    setInterval(() => {
        setLoading(true)
    },3000);

    const handleImage = (e) =>{
        setImage({...image,picture:e.target.files[0]})
    }

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setObjet({...objet,[name]:value})
    }


    const handleSubmit = (e) => 
    {
        e.preventDefault();

        if(objet.title != '' && image.picture != '' && objet.category != ''
        && objet.description != '' && objet.author != '' && objet.country != '')
        {

            const formData = new FormData();

            formData.append('file',image.picture)
            formData.append('title',objet.title)
            formData.append('category',objet.category)
            formData.append('description',objet.description)
            formData.append('author',objet.author)
            formData.append('country',objet.country)



            axios.post("http://localhost:8000/api/add/cont/admin/oeuvra",formData)
            .then((response) => {

                if(response.data.message){
                    setTimeout(() => {
                        setObjet((prev) => {
                            return {
                                ...prev,
                                title:'',
                                category:'',
                                description:'',
                                author:'',
                                country:''
                            }
                        });
                        setImage((prev) => {
                            return {
                                ...prev,
                                picture:''
                            }
                        });
                        setInfo(() => ("Add Loading..."));
                        setStatus(() => (true));
                    },1000)
                    
                    setTimeout(() => {
                        setInfo(() => (response.data.message));
                        setStatus(() => (true));
                    },6000)
                }
                else{  
                    setTimeout(() => {
                        setObjet((prev) => {
                            return {
                                ...prev,
                                title:'',
                                category:'',
                                description:'',
                                author:'',
                                country:''
                            }
                        });
                        setImage((prev) => {
                            return {
                                ...prev,
                                picture:''
                            }
                        });
                        setInfo(() => ("Error ! Reprenez."));
                        setStatus(() => (true));
                    },3000)
                }})

        }
        else
        {
            setObjet((prev) => {
                return {
                    ...prev,
                    title:'',
                    category:'',
                    description:'',
                    author:'',
                    country:''
                }
            });
            setImage((prev) => {
                return {
                    ...prev,
                    picture:''
                }
            });
            setInfo(() => ('Vous avez des champs manquants'));
            setStatus(() => (false));
        }

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

        if(url == `http://localhost:8000/api/list/roy/`){
            return(
                <section className="col-sm-6 offset-sm-3 back--black">
                <div className="m-5">
                    <form onSubmit={handleSubmit}>
                        <h1 className="">Add Tresuares</h1><br/>
                        {status === true ? <p className="perso--message">{info}</p> :
                        <p className="perso--message">{info}</p>}
                        <input type="text" value={objet.title} onChange={handleChange} name="title" className="form-control mt-2" placeholder={content.title}/>
                       
                        <input type="file" onChange={handleImage} name="picture" className="form-control mt-2" placeholder={content.file}/>
                       
                        <input type="text" value={objet.category} onChange={handleChange} name="category" className="form-control mt-2" placeholder={content.category}/>
                       
                        <input type="text" value={objet.description} onChange={handleChange} name="description" className="form-control mt-2" placeholder={content.description}/>
                       
                        <input type="text" value={objet.author} onChange={handleChange} name="author" className="form-control mt-2" placeholder={content.author}/>
                    
                        <input type="text" value={objet.country} onChange={handleChange} name="country" className="form-control mt-2" placeholder={content.country}/>
                        <br/>
                        <button type="submit" className="btn btn-warning col-sm-12 mb-5">
                            <h4 className="color--white">
                                Add
                            </h4>
                        </button>
                    </form>
                </div>
                </section>
            );
        }
        else if(url == `http://localhost:8000/api/list/cont/`){
  
            return(
                <>
                    <section className="col-sm-6 offset-sm-3 back--black">
                        <div className="m-5">
                            <form  onSubmit={handleSubmit} encType={"multipart/form-data"}>
                                <h1 className="mt-5">Add art</h1>
                                {status === true ? <p className="perso--message mt-2">{info}</p> :
                                <p className="perso--message">{info}</p>}
                                <input type="text" value={objet.title} onChange={handleChange} name="title" className="form-control mt-2" placeholder={content.title}/>
                            
                                <input type="file"  onChange={handleImage} name="picture" className="form-control mt-2" placeholder={content.file}/>
                            
                                <input type="text" value={objet.category} onChange={handleChange} name="category" className="form-control mt-2" placeholder={content.category}/>
                            
                                <textarea type="text" value={objet.description} onChange={handleChange} name="description" className="form-control mt-2" placeholder={content.description}/>
                            
                                <input type="text" value={objet.author} onChange={handleChange} name="author" className="form-control mt-2" placeholder={content.author}/>
                            
                                <input type="text" value={objet.country} onChange={handleChange} name="country" className="form-control mt-2" placeholder={content.country}/>
                                <br/>
                                <button type="submit" className="btn btn-warning col-sm-12 mb-5">
                                    <h4 className="color--white">
                                        Add
                                    </h4>
                                </button>
                            </form>
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
                                
                            </div>
                        </div>
                    </section>
                </>
            );
        }
    }
}

                // <>
                //     <section className="over">
                //         <div className="col-md-6 py-5">
                //             <div className="col-sm-12">
                                
                //             </div>
                //         </div>
                //     </section>
                // </>