import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Acordon = (props) => {
  return (
    <>
          <div className="App">

      <Accordion defaultActiveKey="0">

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
             { props.acr_hdr_1}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>Body content for panel 1</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            { props.acr_hdr_2}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body>Body content for panel 2</Card.Body>
          </Accordion.Collapse>
        </Card>


        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            { props.acr_hdr_3}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="2">
            <Card.Body>Body content for panel 3</Card.Body>
          </Accordion.Collapse>
        </Card>




        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            { props.acr_hdr_4}
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="3">
            <Card.Body>Body content for panel 4</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </div>
    </>
  );
};

export default Acordon;
