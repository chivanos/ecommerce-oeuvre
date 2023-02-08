import React from "react";
import { Link } from "react-router-dom";
import Filling from "../Filling/Filling";
import FillingHelp from "../Filling/FillingHelp";
import FillingMailBox from "../Filling/FillingMailBox";
import Manage from "../Manage";
import HeaderLeftGenerale from "../Props/HeaderLeftGenerale";
import HeaderSecond from "../Props/HeaderSecond";

export default function HelpAdmin(){    

    return (
        <>
            <div className="col-md-12">
                <Manage 
                    header={<HeaderSecond title={"Help Page"} />}
                    loadhead={<HeaderLeftGenerale />}
                    link={
                        <Link to={"/adminuser"} className="lie--tw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lien--tela bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </Link>
                    }
                    titre={"Votre guide d'aide"}
                    composant={<Filling dashboard={<FillingHelp />}/>}
                    image={"../images/img1.jpg"}
                />
            </div>
        </>
    );
}