import React from "react";
import { Carousel } from "react-bootstrap";
//import "./styles.css";
//import "./carosel.css";
import ban4 from "../../../images/ban4.jpg";
import ban2 from "../../../images/ban3.jpg";
import ban3 from "../../../images/ban2.jpg";
import ban1 from "../../../images/ban1.jpg";
// import ban1 from "../../../images/ban1.jpg";
//../../images/ban3.jpg//
// function React_bt()
const ReactCarousel = (props) => {
  return (
    <>
      <div className="pp">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={ban1} alt="First slide" />
            <Carousel.Caption>
              <h3>  {props.btname}</h3>
              <p> {props.par_tx} </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={ban2} alt="First slide" />
            <Carousel.Caption>
              <h3>  {props.btname1}</h3>
              <p> {props.par_tx1}</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={ban3} alt="Third slide" />

            <Carousel.Caption>
              <h3> {props.btname2}</h3>
              <p> {props.par_tx2}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ban4} alt="Third slide" />

            <Carousel.Caption>
              <h3> {props.btname3}</h3>
              <p>
              {props.par_tx3}
              </p>
            </Carousel.Caption>

            
          </Carousel.Item>
        </Carousel>
      </div>

    
     
    </>
  );
};

export default ReactCarousel;
