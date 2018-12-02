import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../components/utils/API'
import { Link } from "react-router-dom";




class Userpage extends Component {
    

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.raceRef = React.createRef();
        this.classRef = React.createRef();
        this.levelRef = React.createRef();
        this.state = {
            modal: false,
            char: " ",
            race: " ",
            class: " ",
            level: " "
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            // race: event.target.value,
            // class: event.target.value,
            // level: event.target.value
        });
        console.log(this.state);
    };

    // saveChar() {
    //     event.preventDefault();
    //     this.setState({
    //         race: this.state.race
    //     });
    //     // const char = {
    //     //     name: this.nameRef.value.value,
    //     //     race: this.raceRef.value.value,
    //     //     class: this.classRef.value.value,
    //     //     level: this.levelRef.value.value
    //     // }
    //     console.log(this);
    // }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        if (this.state.name && this.state.level) {
            API.saveChar({
                name: this.state.name,
                race: this.state.race,
                class: this.state.class,
                level: this.state.level
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <div>
                            <Jumbotron>
                                <h1 className="display-3">Welcome, Nick!</h1>
                                <p className="lead">Select your character:</p>
                                <h3>Characters </h3>

                                <ListGroup>
                                        <Link to="/book">  
                                    <ListGroupItem className="justify-content-between" tag="button" className="clearfix" action>Gandalf
                                    
                                    <Button color="primary" className="float-right"> Edit</Button>
                                    </ListGroupItem>
                                        </Link>
                                </ListGroup>
                                <hr className="my-2" />
                                <p className="lead">
                                    <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}New Character</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Build your Character</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleFormSubmit}>
                                <FormGroup>
                                    <Label for="characterName">Name</Label>
                                    <Input type="text" name="char" value={this.state.char} onChange={this.handleChange} id="characterName" placeholder="Character's Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterRace">Race</Label>
                                    <Input type="select" name="race" value={this.state.race} onChange={this.handleChange} id="race">
                                        <option value="">Select</option>
                                        <option value="Human">Human</option>
                                        <option value="Elf">Elf</option>
                                        <option value="Dwarf">Dwarf</option>
                                        <option value="Halfling">Halfling</option>
                                        <option value="Gnome">Gnome</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterClass">Class</Label>
                                    <Input type="select" name="class" value={this.state.class} onChange={this.handleChange} ref={this.classRef} id="class">
                                        <option value="">Select</option>
                                        <option value="Wizard">Wizard</option>
                                        <option value="Cleric">Cleric</option>
                                        <option value="Warlock">Warlock</option>
                                        <option value="Sorcerer">Sorcerer</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterLevel">Level</Label>
                                    <Input type="select" name="level" value={this.state.level} onChange={this.handleChange} ref={this.levelRef} id="level">
                                        <option value="">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>
                                <Button className="float-right" color="danger" onClick={this.toggle}>Cancel</Button>
                                <Button className="float-right" type="submit" color="primary" onClick={this.toggle}>Save</Button>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            {/* <Link to="/list"> */}
                            
                            {/* </Link> */}
                            
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>

        );
    }
}

export default Userpage;