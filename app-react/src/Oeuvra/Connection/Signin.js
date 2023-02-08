import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
        
        
        export default function Signin(){
            
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[remember,setRemember] = useState("");
        const[info,setInfo] = useState("");
        const[status,setStatus] = useState(false);
        const history = useNavigate();

        useEffect(() => {
            if(localStorage.getItem('user-login'))
            {
                history("/adminuser");
            }
            history("/signinadmin");
        },[]);
    
        async function signIn(e)
        {
            e.preventDefault();

            

            if(email != '' && password != '')
            {
    

                let items = {email,password};
              
                let result = await fetch("http://localhost:8000/api/login/admin/oeuvra",{
                    method: 'POST',
                    body: JSON.stringify(items),
                    headers: {
                        "content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                });

                

                setTimeout(() => {
                    setEmail(() => (['']));
                    setPassword(() => (['']));
                    setInfo(() => (["Loading..."]));
                    setStatus(() => (true));
                
                },3000);

                result = await result.json();
                
                setTimeout(() => {
                    
                    if(!result.message)
                    {
                        localStorage.setItem("user-login", JSON.stringify(result));
                        return history('/adminuser');
                    }
                    return setInfo(() => (
                                            "Connexion impossible ou Aucun utilisateur de ce type n'existe. Veuillez reprendre l'opération"
                                        ));
                }, 7000);
                

            }
            else
            {
                setEmail(() => (['']));
                setPassword(() => (['']));
                setInfo(() => (['Vous avez des champs manquants']));
                setStatus(() => (false));
            }
            
        
 


        }
        return(
            <>
                <section className="col-sm-3 offset-sm-4 mt-5 back--black">
                    <div className="m-5">
                        <form onSubmit={signIn}>
                            <h1 className="mt-5">Sign In</h1><br/>
                            {status === true ? <p className="perso--message">{info}</p> :
                            <p className="perso--message">{info}</p>}
                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
                            <br/>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                            <br/><br/>
                            <button type="submit" className="btn btn-warning col-sm-12">
                                <h4 className="color--white">
                                    Sign In
                                </h4>
                            </button>
                            <div className="col-sm-12 mt-3">
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
                            </div>
                        </form>
                        <div className="col-sm-12 mt-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="forme--text"><Link to={'/signupadmin'} className="header--title"><u>Sign Up</u></Link></p>
                                </div>
                                <div className="col-sm-6 mb-3 style">Need help?</div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}