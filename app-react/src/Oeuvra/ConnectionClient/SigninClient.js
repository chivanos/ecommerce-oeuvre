import React, { useState } from "react";
import { Link } from "react-router-dom";



    export default function Signup(){
        
        
        const[name,setName] = useState("");
        const[password,setPassword] = useState("");
        const[remember,setRemember] = useState("");
        // const history  = useHistory();

        async function signIn()
        {
            let items = {name,password};
            console.warn(items);
            let result = await fetch("http://localhost:8000/api/register",{
                method: 'POST',
                body: JSON.stringify(items),
                headers: {
                    "content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });
            result = await result.json();
            console.warn("result",result);
            localStorage.setItem("user-information", JSON.stringify(result));
            // history.push('/add');
        }

        return(
            <>
                <section className="col-sm-3 offset-sm-4 mt-5 back--black">
                    <div className="m-5">
                        <h1 className="mt-5">Sign In</h1><br/>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
                        <br/>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password"/>
                        <br/><br/>
                        <button onClick={signIn} className="btn btn-warning col-sm-12">
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
                        <div className="col-sm-12 mt-3">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="forme--text"><Link to={'/signup'} className="header--title"><u>Sign Up</u></Link></p>
                                </div>
                                <div className="col-sm-6 mb-3 style">Need help?</div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}