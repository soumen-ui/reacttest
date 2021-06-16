//import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function Tabb() {
  const [key, setKey] = useState('home');

  return (
    <div className="container"> 
   
    <>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Home tab 1">
        abcd 1 
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="profile" title="Profile tab 2">
        def 2
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact tab 3">
        ghi 3
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>

    </>
    </div>
  );
}

//render(<ControlledTabs />);
// const Tabb = () => {
//   return (
//     <>
//       <h1> continent Tabb page 1 </h1>


     
//     </>
//   );
// };

export default Tabb;
