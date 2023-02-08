// import React from "react";

        
//         export default class AddCont extends React.Component{

//             constructor(){
//                 super();

//                 this.state = {
//                     title: '',
//                     file: '',
//                     category: '',
//                     description: '',
//                     author:'',
//                     country: '',
//                     status: false,
//                     info: ''
//                 }
//             }

//         handleFile(e){
//             const target = e.target;
//             const value = target.type === "file" ? this.files : target.value;
//             const name = target.name;
//             this.setState({
//                 [name]: value
//             })
//         }

//         handleChange(e){
//             const target = e.target;
//             const value = target.type === "checkbox" ? target.checked : target.value;
//             const name = target.name;
//             this.setState({
//                 [name]: value
//             })
//         }
    
//         async handleSubmit(e)
//         {
//             e.preventDefault();

//             const formData = new FormData();

//             if(this.state.title != '' && this.state.file != '' && this.state.category != ''
//             && this.state.description != '' && this.state.author != '' && this.state.country != '')
//             {
    

//                 // let items = {title,file,category,description,author,country};

//                 formData.append('title',this.state.title);
//                 formData.append('file',this.state.file);
//                 formData.append('category',this.state.category);
//                 formData.append('description',this.state.description);
//                 formData.append('author',this.state.author);
//                 formData.append('country',this.state.country);
              
//                 let result = await fetch("http://localhost:8000/api/add/cont/admin/oeuvra",formData);

//                 result = await result.json();
                

//                 setTimeout(() => {
//                     this.state({
//                         title: '',
//                         file: '',
//                         category: '',
//                         description: '',
//                         author:'',
//                         country: '',
//                         status: true,
//                         info: 'Add successfull'
//                     })
                
//                 },3000);


                

//             }
//             else
//             {
//                 this.setState({
//                     title: '',
//                     file: '',
//                     category: '',
//                     description: '',
//                     author:'',
//                     country: '',
//                     status: false,
//                     info: 'Vous avez des champs manquants'
//                 })
                
//             }
            

//         }

//         render(){
//             return(
//                 <>
//                     <section className="col-sm-6 offset-sm-3 back--black">
//                         <div className="m-5">
//                             <form onSubmit={(e)=>this.handleSubmit(e)}>
//                                 <h1 className="mt-5">Add art</h1>
//                                 {this.state.status === true ? <p className="perso--message mt-2">{this.state.info}</p> :
//                                 <p className="perso--message">{this.state.info}</p>}
//                                 <input type="text" name="title" value={this.state.title} onChange={(e)=>this.handleChange(e)} className="form-control mt-2" placeholder="title"/>
                             
//                                 <input type="file" name="file" value={this.state.file} onChange={(e)=>this.handleFile(e)} className="form-control mt-2" placeholder="image"/>
                             
//                                 <input type="text" name="category" value={this.state.category} onChange={(e)=>this.handleChange(e)} className="form-control mt-2" placeholder="category"/>
                             
//                                 <input type="text" name="description" value={this.state.description} onChange={(e)=>this.handleChange(e)} className="form-control mt-2" placeholder="description"/>
                             
//                                 <input type="text" name="author" value={this.state.author} onChange={(e)=>this.handleChange(e)} className="form-control mt-2" placeholder="author"/>
                             
//                                 <input type="text" name="country" value={this.state.country} onChange={(e)=>this.handleChange(e)} className="form-control mt-2" placeholder="country"/>
//                                 <br/>
//                                 <button type="submit" className="btn btn-warning col-sm-12 mb-5">
//                                     <h4 className="color--white">
//                                         Add
//                                     </h4>
//                                 </button>
//                             </form>
//                         </div>
//                     </section>
//                 </>
//             );
//         }
// }





















import React, { useEffect, useState } from "react";
import axios from 'axios'
        
    export default function AddCont(){

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
            return(
                <>
                    <section className="col-sm-6 offset-sm-3 back--black">
                        <div className="m-5">
                            <form  onSubmit={handleSubmit} encType={"multipart/form-data"}>
                                <h1 className="mt-5">Add art</h1>
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
                                        Add
                                    </h4>
                                </button>
                            </form>
                        </div>
                    </section>
                </>
            );
    }
}


