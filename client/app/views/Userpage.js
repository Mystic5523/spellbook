import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../components/utils/API'



class Userpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleFormSubmit() {
        event.preventDefault();
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
                                <h1 className="display-3">Welcome, User!</h1>
                                <p className="lead">Select your character:</p>
                                <h3>Characters </h3>

                                <ListGroup>
                                    {/* <Link to={"/chars/" + char._id}>{char.name}</Link>
                                    {this.state.chars.length ?
                                        this.state.chars.map(char => {
                                            return (
                                                <ListGroupItem tag="button" action>{char.name}, {char.race}, {char.class}, {char.level} </ListGroupItem>
                                            )
                                        // })
                                        : */}
                                    {/* ( */}
                                    <ListGroupItem tag="button" action>Didn't Load</ListGroupItem>
                                    {/* ) */}
                                    {/* } */}
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
                            <Form>
                                <FormGroup>
                                    <Label for="characterName">Name</Label>
                                    <Input type="text" name="name" id="characterName" placeholder="Character's Name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterRace">Race</Label>
                                    <Input type="select" name="race" id="race">
                                        <option value="">Select</option>
                                        <option>Human</option>
                                        <option>Elf</option>
                                        <option>Dwarf</option>
                                        <option>Halfling</option>
                                        <option>Gnome</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterClass">Class</Label>
                                    <Input type="select" name="class" id="class">
                                        <option value="">Select</option>
                                        <option>Wizard</option>
                                        <option>Cleric</option>
                                        <option>Warlock</option>
                                        <option>Sorcerer</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="characterLevel">Level</Label>
                                    <Input type="select" name="level" id="level">
                                        <option value="">Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </Container>

        );
    }
}

export default Userpage;