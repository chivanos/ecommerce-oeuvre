import React, { useEffect, useState } from "react";

export default function FillingProfile(){

    const [loading,setLoading] = useState(false);
    
    setInterval(() => {
        setLoading(true)
    },3000);

        
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
        return (
            <>
                <section className="over">
                    <div className="col-md-6 py-5 text-center">
                        <div className="col-sm-12">
                            Laudantium labore iusto reiciendis at, aut non dolore sunt, tempora aperiam se!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, optio harum!  
                        </div>
                    </div>
                </section>
            </>
        );
    }
}