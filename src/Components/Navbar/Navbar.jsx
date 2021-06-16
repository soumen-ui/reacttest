import { NavLink } from "react-router-dom";


//import React from "react";
//import "./styles.css";




import {useEffect} from 'react'
//import './Navbar.css';
//import { NavLink } from 'react-router-dom';
import  {  React } from "react";
//import {  NavLink, Link } from "react-router-dom";
//import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
//import { NavDropdown } from 'react-bootstrap';
import $ from 'jquery';




  const Navbar = () => {
 




  function cuanimation(){
    //var tabsNewAnim = $('#navbarsExample07');
    //var activeItemNewAnim = tabsNewAnim.find('.active');
    
  




    $("#navbarsExample07").on("click","li.nav-item:not('.dropdown'), li .dropdown-item",function(e){
    
      $('#navbarsExample07').removeClass("show");
      //$(this).addClass('active');
     
      
    });




   




  }



  document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    //$(window).on('resize', function()
    if (window.innerWidth > 992) {
    
      document.querySelectorAll('li.nav-item.dropdown').forEach(function(everyitem){
    
        everyitem.addEventListener('mouseover', function(e){
    
          let el_link = this.querySelector('div.nav-item.dropdown');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
          }
    
        });
        everyitem.addEventListener('mouseleave', function(e){
         
            let el_link = this.querySelector('div.nav-item.dropdown');
          //let el_link = this.querySelector('a[data-bs-toggle]');
          //let el_link = this.querySelector('data-toggle');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
          }
    
    
        })
      });
    
    }
    // end if innerWidth

   
    }); 



  useEffect(() => {
    
    cuanimation();
    $(window).on('resize', function(){
      setTimeout(function(){ cuanimation(); }, 500);
    });
    
  }, []);

  

 

  return (
    
     
     
       
      


      <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <NavLink className="navbar-brand" to="/">
      Container
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-controls="navbarsExample07"
     
      data-toggle="collapse"
      data-target="#navbarsExample07"
      ariaexpanded="false"
      aria-label="Toggle navigation"
     
    >
      <span className="navbar-toggler-icon ">
       
        <i className="navbar-toggler-icon "></i>
      </span>
    </button>



   
    <div className="collapse navbar-collapse" id="navbarsExample07" >
       
  
      <ul className="navbar-nav ml-auto" id="myDIV">
        <li className="nav-item zactive">
          <NavLink
            exact
            activeClassName="myactive"
            className="nav-link "
            to="/"
          >
             <i 
                className="fa fa-home">
                </i> 
            Home{" "}
          </NavLink>
        </li>

        <li className="nav-item">
              <NavLink  activeClassName="myactive" className="nav-link" to="/about">
                <i 
                className="far fa-clone">
                </i>About
              </NavLink>
            </li>

        <li className="nav-item">
              <NavLink  activeClassName="myactive" className="nav-link" to="/contact">
                <i 
                className="far fa-clone">
                </i>Contact
              </NavLink>
            </li>







            
       


       



      




        



         

      
       


         
      </ul>
    </div>
  </div>
</nav>
</>
  );
}






export default Navbar;
