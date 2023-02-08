import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"


    export default function Signup(){
        
        
        const[name,setName] = useState("");
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[info,setInfo] = useState("");
        const[status,setStatus] = useState(false);
        const history = useNavigate();

        useEffect(() => {
            if(localStorage.getItem('user-login'))
            {
                history("/adminuser");
            }
        },[]);


        async function signUp(e)
        {
            e.preventDefault();

            

            if(name != '' && email != '' && password != '')
            {
    

                let items = {name,password,email};
                let result = await fetch("http://localhost:8000/api/asuser",{
                    method: 'POST',
                    body: JSON.stringify(items),
                    headers: {
                        "content-Type": 'application/json',
                        "Accept": 'application/json'
                    }
                });

                

                setTimeout(() => {
                    setName(() => (['']));
                    setEmail(() => (['']));
                    setPassword(() => (['']));
                    setInfo(() => (['Inscription réussie ! ']));
                    setStatus(() => (true));
             
                }, 5000);

                



                result = await result.json();
                setTimeout(() => {
                    history('/signinadmin');
                }, 7000);
            }
            else
            {
                setName(() => (['']));
                setEmail(() => (['']));
                setPassword(() => (['']));
                setInfo(() => (['Vous avez des champs manquants']));
                setStatus(() => (false));
            }


        }

        return(
            <>
               <section className="col-sm-3 offset-sm-4 mt-3 back--black">
                    <div className="m-5">
                        <form onSubmit={signUp}>
                            <h1 className="mt-5">Sign Up</h1><br/>
                            {status === true ? <p className="perso--message">{info}</p> : 
                            <p className="perso--message">{info}</p>}
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
                            <br/>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
                            <br/>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                            <br/><br/>
                            <button  type="submit" className="btn btn-warning col-sm-12 mb-5">
                                <h4 className="color--white">
                                    Sign Up
                                </h4>
                            </button>
                        </form>
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
                        <div className="col-sm-12 mt-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="forme--text"><Link to={'/signinadmin'} className="header--title"><u>Sign In</u></Link></p>
                                </div>
                                <div className="col-sm-6 mb-3 style">Need help?</div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}
