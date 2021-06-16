import React from "react";
import React_Carousel from "../Aaothercontent/React_Carousel/React_Carousel";
import Accordion from "../Aaothercontent/Accordion/Accordion";
import Tabb from "../Aaothercontent/Tabb/Tabb";
import Paralaxx from "../Aaothercontent/Paralax/Paralax";
import Apiavatar from "../Aaothercontent/Testimonials/Testimonials";
import "./carosel_homecontent.css";
import "./carosel_homecontent2.css";
const Homecontent = (props) => {
  return (
    <>
     <div className="container"> 
     
     <div className="row">
     <div className="col-12 col-md-8 cer1">
     <React_Carousel
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

<div className="col-12 col-md-4 vrtl_content">

     <div className="vrtl_box  cer2"> 
      
      <React_Carousel

      btname="xxxxx"
      btname1="yyyyyy"
      btname2="zzzzzzz"
      btname3="xxx zzz"

      par_tx=" Nulla."
      par_tx1=" vitae ."
      par_tx2=" elit ."
      par_tx3=" libero"

     />
     
     </div>

<div  className="vrtl_box">  
      <React_Carousel

      btname="xxxxx"
      btname1="yyyyyy"
      btname2="zzzzzzz"
      btname3="xxx zzz"

      par_tx="Lorium Nulla."
      par_tx1="Epsum vitae ."
      par_tx2="Doller elit ."
      par_tx3="Amet libero"

     />
     
     </div>

     
     </div>

     </div>
     </div>

     <div className="container">

<div className="row">

<div className="col-12 col-md-3"> <h1 className="text-info text-capitalize">{props.acdrn} </h1>
<Accordion

acr_hdr_1="Accordion header 1"
acr_hdr_2="Accordion header 2"
acr_hdr_3="Accordion header 3"
acr_hdr_4="Accordion header 4"
/>
</div>
<div className="col-12 col-md-9"> <h1 className="text-info text-capitalize">{props.tbn_hdr}</h1>
<Tabb/>
</div>
<div className="row"></div>

</div>

     </div>

     <div className="container p-0">

       <h1 className="text-center"> Paralax</h1>

<Paralaxx/>

     </div>


     <div className="container">



<div className="row">

  <div className="col-12 col-md-10 ">
    <h1>Testimonials </h1>
    <div className="bg-success p-5"> <Apiavatar/></div>

 
  </div>

  <div className="col-12 col-md-2">
banner overlay

  </div>

</div>

</div>

    
    </>
  );
};

export default Homecontent;
