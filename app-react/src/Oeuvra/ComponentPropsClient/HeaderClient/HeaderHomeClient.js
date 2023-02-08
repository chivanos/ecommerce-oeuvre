import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import MessageHome from "../../ComponentProps/MessageHome";


export default function HeaderSc(){

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
            <div className="col-sm-12 py-3 text-center header--sc">
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="col-sm-10 forme--text">
                            <Link to={'/'} className="header--title">
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
                        <Link 
                            to={'/help'} 
                            className=" btn btn-lg btn-warning color--white"
                        >
                            Need help ?
                        </Link>
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
//                     <h1 className="col-sm-10 forme--text"><Link to={'/'} className="header--title">Oeuvra</Link></h1>
//                     <Link to={'/helpclient'} className="col-sm-2 btn btn-lg btn-warning color--white">Need help?</Link>
//                 </div>
//             </div>
//             <MessageHome />
//             <hr className="style--ligne" />
//         </>
//     );
// }

