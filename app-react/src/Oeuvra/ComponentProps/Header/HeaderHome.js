
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import MessageHome from "../MessageHome";


export default function HeaderHome(){

    const[roy,setRoy] = useState(false);
    const[cont,setCont] = useState(false);
    const[quiz,setQuiz] = useState(false);
    const[contact,setContact] = useState(false);

    function handleClickRoy(){
        setRoy(true)
    }
    function handleClickCont(){
        setCont(true)
    }
    function handleClickQuiz(){
        setQuiz(true)
    }
    function handleClickContact(){
        setContact(true)
    }


    return(
        <>
            <div className="col-sm-12 py-3 mb-5 text-center header--sc">
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="col-sm-10 forme--text">
                            <Link to={'/adminhome'} className="header--title">
                                Oeuvra
                            </Link>
                        </h1>
                    </div>
                    <div className="col-sm-4 div--nav">
                        {
                            roy === false && cont === false
                            && quiz ===false && contact === false
                            ?
                            <Navbar>
                                <Link 
                                    to="/home/oeuvra/royal"
                                    className="to--link"
                                    onClick={handleClickRoy}
                                >
                                    Tresuares Royal
                                </Link>
                                <Link 
                                    to="/home/oeuvra/art"
                                    className="to--link"
                                    onClick={handleClickCont}
                                >
                                    Contemporary Art
                                </Link>
                                <NavDropdown title="Guide">
                                <NavDropdown.Item className="guide">
                                    <Link 
                                        to="/home/oeuvra/quiz"
                                        className="to--link"
                                        onClick={handleClickQuiz}
                                    >
                                        Pourquoi Oeuvra ?
                                    </Link> 
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item className="guide">
                                        <Link 
                                            to="/home/contact/centre"
                                            className="to--link"
                                            onClick={handleClickContact}
                                        >
                                            Contactez-nous
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Navbar>
                            :
                            roy === false && cont === true 
                            && quiz ===false && contact === false
                            ?
                            <Navbar>
                                <Link 
                                    to="/home/oeuvra/royal"
                                    className="to--link"
                                    onClick={handleClickRoy}
                                >
                                    Tresuares Royal
                                </Link>
                                <Link 
                                    to="/home/oeuvra/quiz"
                                    className="to--link"
                                    onClick={handleClickQuiz}
                                >
                                    Pourquoi Oeuvra ?
                                </Link>
                                <Link 
                                    to="/home/contact/centre"
                                    className="to--link"
                                    onClick={handleClickContact}
                                >
                                    Contactez-nous
                                </Link>
                            </Navbar>
                            :
                            roy === true && cont === false 
                            && quiz ===false && contact === false
                            ?
                            <Navbar>
                                <Link 
                                    to="/home/oeuvra/art"
                                    className="to--link"
                                    onClick={handleClickCont}
                                >
                                    Contemporary Art
                                </Link>
                                <Link 
                                    to="/home/oeuvra/quiz"
                                    className="to--link"
                                    onClick={handleClickQuiz}
                                >
                                    Pourquoi Oeuvra ?
                                </Link>
                                <Link 
                                    to="/home/contact/centre"
                                    className="to--link"
                                    onClick={handleClickContact}
                                >
                                    Contactez-nous
                                </Link>
                            </Navbar>
                            :
                            roy === false && cont === false 
                            && quiz ===true && contact === false
                            ?
                            <Navbar>
                                <Link 
                                    to="/home/oeuvra/royal"
                                    className="to--link"
                                    onClick={handleClickRoy}
                                >
                                    Tresuares Roayal
                                </Link>
                                <Link 
                                    to="/home/oeuvra/art"
                                    className="to--link"
                                    onClick={handleClickCont}
                                >
                                    Contemporary Art
                                </Link>
                                <Link 
                                    to="/home/contact/centre"
                                    className="to--link"
                                    onClick={handleClickContact}
                                >
                                    Contactez-nous
                                </Link>
                            </Navbar>
                            :
                            roy === false && cont === false 
                            && quiz ===false && contact === true
                            ?
                            <Navbar>
                                
                                <Link 
                                    to="/home/oeuvra/royal"
                                    className="to--link"
                                    onClick={handleClickRoy}
                                >
                                    Tresuares Roy
                                </Link>
                                <Link
                                    to="/home/oeuvra/art"
                                    className="to--link"
                                    onClick={handleClickCont}
                                >
                                    Contemporary Art
                                </Link>
                                <Link 
                                    to="/home/oeuvra/quiz"
                                    className="to--link"
                                    onClick={handleClickQuiz}
                                >
                                    Pourquoi Oeuvra ?
                                </Link>
                            </Navbar>
                            :
                            <Navbar>
                                <Link 
                                    to="/home/oeuvra/royal"
                                    className="to--link"
                                    onClick={handleClickRoy}
                                >
                                    Tresuares Royal
                                </Link>
                                <Link 
                                    to="/home/oeuvra/art"
                                    className="to--link"
                                    onClick={handleClickCont}
                                >
                                    Contemporary Art
                                </Link>
                                <NavDropdown title="Guide">
                                <NavDropdown.Item className="guide">
                                    <Link 
                                        to="/home/oeuvra/quiz"
                                        className="to--link"
                                        onClick={handleClickQuiz}
                                    >
                                        Pourquoi Oeuvra ?
                                    </Link> 
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item className="guide">
                                        <Link 
                                            to="/home/contact/centre"
                                            className="to--link"
                                            onClick={handleClickContact}
                                        >
                                            Contactez-nous
                                        </Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Navbar>
                        }
                        
                    </div>
                    <div className="col-sm-4">
                    {
                        localStorage.getItem('user-login') ?
                        <>
                            <Link to={'/adminuser'} className="col-sm-2 btn btn-lg btn-warning color--white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </Link>
                        </>
                        : 
                        <>
                            <Link to={'/signinadmin'} className="col-sm-2 btn btn-lg btn-warning color--white">Sign in</Link>
                        </>
                    }
                    </div>
                </div>
            </div>
            <MessageHome />
            <hr className="style--ligne" />
        </>
    );
}































// import React from "react";
// import MessageHome from "../MessageHome";
// import { Link } from "react-router-dom";



// export default function HeaderHome(){
//     return(
//         <>
//             <div className="container col-sm-12 mt-3">
//                 <div className="row">
//                     <h1 className="col-sm-10 forme--text"><Link to={'/adminhome'} className="header--title">Oeuvra</Link></h1>
//                 {
//                     localStorage.getItem('user-login') ?
//                     <>
//                         <Link to={'/adminuser'} className="col-sm-2 btn btn-lg btn-warning color--white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//                             <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
//                             </svg>
//                         </Link>
//                     </>
//                     : 
//                     <>
//                         <Link to={'/signinadmin'} className="col-sm-2 btn btn-lg btn-warning color--white">Sign in</Link>
//                     </>
//                 }
//                 </div>
//             </div>
//             <MessageHome />
//             <hr className="style--ligne" />
//         </>
//     );
// }

