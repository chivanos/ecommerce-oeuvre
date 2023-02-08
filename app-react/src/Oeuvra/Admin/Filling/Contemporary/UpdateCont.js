import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

        
        export default function UpdateCont(){
            
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
            const [loading,setLoading] = useState(false);
    
        
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
                                setInfo(() => ("Update Loading..."));
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
                return(
                    <>
                        <section className="col-sm-6 offset-sm-3 back--black">
                            <div className="m-5">
                                <form  onSubmit={handleSubmit} encType={"multipart/form-data"}>
                                    <h1 className="mt-5">Update art</h1>
                                    {status === true ? <p className="perso--message mt-2">{info}</p> :
                                    <p className="perso--message">{info}</p>}
                                    <input type="text" value={objet.title} onChange={handleChange} name="title" className="form-control mt-2" placeholder="title"/>
                                
                                    <input type="file"  onChange={handleImage} name="picture" className="form-control mt-2" placeholder="image"/>
                                
                                    <input type="text" value={objet.category} onChange={handleChange} name="category" className="form-control mt-2" placeholder="category"/>
                                
                                    <textarea type="text" value={objet.description} onChange={handleChange} name="description" className="form-control mt-2" placeholder="description"/>
                                
                                    <input type="text" value={objet.author} onChange={handleChange} name="author" className="form-control mt-2" placeholder="author"/>
                                
                                    <input type="text" value={objet.country} onChange={handleChange} name="country" className="form-control mt-2" placeholder="country"/>
                                    <br/>
                                    <button type="submit" className="btn btn-warning col-sm-12 mb-5">
                                        <h4 className="color--white">
                                            Update
                                        </h4>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </>
                );
        }
}