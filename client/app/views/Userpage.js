import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../components/utils/API'
import { Link } from "react-router-dom";




class Userpage extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            chars: [],
            modal: false,
            name: " ",
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

    componentDidMount() {
        this.loadChars();
    };

    loadChars() {
        API.getChars()
            .then(res =>
                this.setState({ chars: res.data })
            )
            .catch(err => console.log(err));
        };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        API.saveChar({
            name: this.state.name,
            race: this.state.race,
            class: this.state.class,
            level: this.state.level
        })
            .then(console.log("yes"))
            .then(res => this.loadChars())
            .catch(err => console.log(err));
    };

    deleteChar(id) {
        API.deleteChar(id)
            .then(res => this.loadChars(), console.log("All gone"))
            .catch(err => console.log(err));
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
                                    {this.state.chars.length ?
                                        this.state.chars.map(chars => {
                                            return (
                                            <div>
                                                <Link to="/list">
                                                <ListGroupItem key={chars._id} className="justify-content-between" tag="button" className="clearfix" action>
                                                <h5 className="chstyle"> <span className="chname">{chars.name}</span> &bull; <span className="chrace">{chars.race}</span> &bull; <span className="chclass">{chars.class}</span> &bull; <span className="chlevel">{chars.level}</span>
                                                <Button color="dark" className="float-right" onClick={() => this.deleteChar(chars._id)}> Delete</Button>
                                                <Button color="primary" className="float-right"> Edit</Button>
                                                </h5>
                                                </ListGroupItem>
                                                </Link>
                                            </div>
                                            )
                                        })
                                        :
                                        (
                                            <div>
                                                <Link to="/book">  
                                                <ListGroupItem className="justify-content-between" tag="button" className="clearfix" action>Gandalf
                                                <Button color="dark" className="float-right"> Delete</Button>
                                                <Button color="primary" className="float-right"> Edit</Button>
                                                </ListGroupItem>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </ListGroup>
                                <hr className="my-2" />
                                            <p className="lead">
                                                <Button color="primary" onClick={this.toggle}>New Character</Button>
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
                                    <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} id="characterName" placeholder="Character's Name" />
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
                                <Button className="float-right" color="dark" onClick={this.toggle}>Cancel</Button>
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