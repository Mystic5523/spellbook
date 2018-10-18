import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';


class Userpage extends Component {
    // state = {

    // }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <div>
                            <Jumbotron>
                                <h1 className="display-3">Welcome, User!</h1>
                                <p className="lead">Build your chracter:</p>
                                <h3>Characters </h3>
                                <ListGroup>
                                    <ListGroupItem tag="button" action>Character 1</ListGroupItem>
                                    <ListGroupItem tag="button" action>Merlin</ListGroupItem>
                                    <ListGroupItem tag="button" action>Gandalf</ListGroupItem>
                                    <ListGroupItem tag="button" action>Joe</ListGroupItem>
                                    <ListGroupItem disabled tag="button" action>Character X</ListGroupItem>
                                </ListGroup>
                                <hr className="my-2" />
                                <p className="lead">
                                    <Button color="primary">New Character</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Userpage;