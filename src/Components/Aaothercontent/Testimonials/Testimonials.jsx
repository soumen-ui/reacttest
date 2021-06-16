
import React from 'react';
// import ReactDOM from 'react-dom';
import './testimonials.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Carousel } from "react-bootstrap";


class Apiavatar extends React.Component {

  constructor(){
        super();
        this.state ={
          users:null

        }
    }
   componentDidMount(){
     fetch('https://reqres.in/api/users').then((resp) => {
         resp.json().then((result) =>{

          this.setState({users:result.data})
         })

     })
    }


render () {
   return (
  <div className=" zpp testimonial_sldr">
    <Carousel>
 
  {
    this.state.users ?
    this.state.users.map((itemm,i) =>


    // <div className="col-12 col-sm-6 border  border-warning m-1  ">


    // <p> <img src={item.avatar} alt="pic abc" /></p> 
  
    // <p><strong>first name: </strong>{item.first_name} {item.last_name}  </p>
    
   
    // <p><strong>email: </strong>{item.email}</p> 
 

 
    // </div>
    <Carousel.Item>
      <div className="col-12  text-center">

       <img className="m-auto w-25" src={itemm.avatar} alt="First slide" />
       
       </div>
  <div className="col-12">  

   <Carousel.Caption>
      <h3> {itemm.first_name}  {itemm.last_name} </h3>
     <p>{itemm.email}</p> 
     <p> aaa </p>
      
    </Carousel.Caption> </div>
  
  </Carousel.Item>

    )  : null } 
    
    {/* /////loop end */}
   
    </Carousel>
  </div> ///////end


);
}

}

export default Apiavatar;