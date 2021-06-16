import React from "react";

import ReactCarousel from "../Aaothercontent/React_Carousel/React_Carousel";

import "./carosel_homecontent.css";

const Homecontent = (props) => {
  return (
    <>
   
     <div className="container"> 
     
          <div className="row">
                  <div className="col-12 col-md-8 cer1">
                        <ReactCarousel
                          btname="First slide label"
                          btname1="Second slide label"
                          btname2="Third slide label"
                          btname3="Fourth slide label"

                          par_tx="Fourth Nulla vitae elit libero, a pharetra augue mollis interdum."
                          par_tx1="Second Nulla vitae elit libero, a pharetra augue mollis interdum."
                          par_tx2="Third Nulla vitae elit libero, a pharetra augue mollis interdum."
                          par_tx3="Fourth Nulla vitae elit libero, a pharetra augue mollis interdum."
                        
                        />
                    
                  </div>
          </div>
     </div>

    </>
  );
};

export default Homecontent;
