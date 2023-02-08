import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Button, Card, Col } from "react-bootstrap";


export default function BodySc(props){
    const cont = props.cont;
    const roy = props.roy;
    const [loading,setLoading] = useState(false);
    let url = props.url;

    setInterval(() => {
        setLoading(true)
    },5000);
        

    const handleText = ()=>{
        return (
            <div className="bg--bg">
                LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
                LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
                LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
                LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
            </div>
        );
    }
    // const handleJs = ()=>{
    //     return `
    //         <div className="bg--bg">
    //             LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
    //             LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
    //             LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
    //             LoremLoreLoremLoreLoremLoreLoremLoreLoremLoreLoremLore
    //         </div>
    //     `
    // }

    if(loading === false){
        return(
            <>
                <div className="page--rqt">
                    <h5>Patientez un instant...</h5>
                    <span id="rqt--get"></span>
                </div>
            </>
        );
    }
    else{

        if(url == `http://localhost:8000/api/list/roy/oeuvra`){
            return(
                <>
                    <div className="col-sm-12 text-center mb-5">
                        <h1>Tresuares news Royal</h1>
                    </div>
                    <div className="row props--map text-center">
                    {
                        roy.map(roy =>                 
                            <div 
                                className="col-md-4 mt-5" 
                                key={roy.id} 
                                id={roy.id}
                                title={roy.title}
                            >
                               <img width={"300"} height={"300"}  src={`http://localhost:8000/${roy.file}`} />
                                <div>
                                    <div>{roy.title}</div>
                                    <div>
                                        <Button 
                                            // onClick={handleJs}
                                            className="btn btn-warning"
                                        >
                                            Voir Plus
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </>
            );
        }
        else if(url == `http://localhost:8000/api/list/cont/oeuvra`){
            return(
                <>
                    <div className="col-sm-12 text-center mb-5">
                        <h1>Contemporary news art</h1>
                    </div>
                    <div className="row props--map text-center">
                    {
                        cont.map(cont =>
                            <div className="col-md-4 py-2"
                                key={cont.id} 
                                id={cont.id}
                                title={cont.title}
                            >
                                <img  src={`http://localhost:8000/${cont.file}`}
                                    width={"300"} height={"300"}
                                />
                                <div>
                                    <div>{cont.title}</div>
                                    <div>
                                        <Button 
                                            // onClick={handleJs}
                                            className="btn btn-warning"
                                        >
                                            Voir Plus
                                        </Button>
                                    </div>
                                </div>
                            </div>        
                        )
                    }
                    </div>
                </>
            );
        }
        else{
            return(
                <div 
                    className="col-sm-12 text-center justify-center items-center"
                >
                    <h1>Veuillez Recharger la page ! Erreur de connexion</h1>
                </div>
            );
        }
    }
    
}



// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>