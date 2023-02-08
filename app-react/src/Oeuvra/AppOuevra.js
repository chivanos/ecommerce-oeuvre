import React from "react";
import Header from './Header';
import Body from './Body';
import BodyCorp from "./ComponentProps/BodyCorp";
import FooterContact from "./FooterContact";


export default function AppOeuvra(){
    return(
        <>
            <div className="bg--bg">
                <Header />
                <Body container={<BodyCorp/>} />
                <FooterContact />
            </div>
        </>
    );
}






















// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <br />
//       <Navbar bg="primary" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       <br />
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;