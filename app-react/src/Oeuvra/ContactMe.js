import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
        
        
        export default function Contact(){
            
        const[email,setEmail] = useState("")
        const[mail,setMail] = useState("");
        const[info,setInfo] = useState("");
        const[status,setStatus] = useState(false);

    
        async function contactMe(e)
        {
            e.preventDefault();

            

            if(email != '' && mail != '')
            {
    

                let item = {email,mail};
                let result = await fetch("http://localhost:8000/api/contact/oeuvra/send",{
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: {
                        "content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                });

                

                setTimeout(() => {
                    setEmail(() => (['']));
                    setMail(() => (['']));
                    setInfo(() => (["Nous avons bien reçu votre message. Vous recevez notre réponse d'ici peu!"]));
                    setStatus(() => (true));
                
                }, 5000);

            
            }
            else
            {
                setEmail(() => (['']));
                setMail(() => (['']));
                setInfo(() => (['Vous avez des champs manquants']));
                setStatus(() => (false));
            }


        }
        return(
            <>
                <section className="col-sm-4 offset-sm-4 text-center mt-5 mb-5 py-2 back--black">
                    <div className="m-5">
                        <form onSubmit={contactMe} >
                            <h1 className="mt-5">Contact</h1><br/>           
                            {status === true ? <p className="perso--message">{info}</p> : 
                            <p className="perso--message">{info}</p>}
                            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Adress Email"/>
                            <br/>
                            <textarea type="text" name="mail" value={mail} onChange={(e)=>setMail(e.target.value)} className="form-control" placeholder="Mail"/>
                            <br/><br/>
                            <button type="submit" className="btn btn-warning col-sm-12 mb-3">
                                <h4 className="color--white">
                                    Send
                                </h4>
                            </button>
                            {/* <div className="col-sm-12 mt-3">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <input 
                                            type="checkbox" 
                                            value={remember} 
                                            onChange={(e)=>setRemember(e.target.value)} 
                                            className="form-control" 
                                            placeholder="Remember"
                                        />
                                    </div>
                                    <div className="col-sm-10 mb-3 ">Remember me</div>
                                </div>
                            </div> */}
                        </form>
                        {/* <div className="col-sm-12 mt-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="forme--text"><Link to={'/signupadmin'} className="header--title"><u>Sign Up</u></Link></p>
                                </div>
                                <div className="col-sm-6 mb-3 style">Need help?</div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </>
        );
}