import React, { Component } from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import API from '../components/utils/API'



class Spellbook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spells: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(spell) {
        console.log(spell)
        this.setState({
            modal: !this.state.modal,
            modalSpell: spell
        });
    }


    componentDidMount() {
        API.getSpells().then(res => {
            this.setState({ spells: res.data });
        }
        )
    }
    renderModal() {
        return (<div>
            <Modal isOpen={this.state.modal} className={this.props.className}>
                <ModalHeader>{this.state.modalSpell ? this.state.modalSpell.name : ''}</ModalHeader>
                <ModalBody>{this.state.modalSpell.desc}</ModalBody>
                <ModalBody>{this.state.modalSpell ? this.state.modalSpell.higher_level : ''}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>)
    }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <Jumbotron>
                            <h1 className="display-3">Welcome, User!</h1>
                            <h3>Characters </h3>
                            <Row>
                                {this.state.spells.length ?
                                    this.state.spells.map(spell => {
                                        return (
                                            <Col md="4">
                                                <Card key={spell._id}>
                                                    <CardBody>
                                                        <Link to={"/spells/" + spell._id}></Link>
                                                        <CardTitle>{spell.name}</CardTitle>
                                                        <CardSubtitle><span className = "lvl">Lvl: {spell.level}</span>, <span className = "conc">Conc: {spell.concentration}</span>, <span className = "rit">Rit: {spell.ritual}</span></CardSubtitle>
                                                        <br />
                                                        <CardText>{spell.desc}</CardText>
                                                        <CardText><small> {spell.school} </small></CardText>
                                                        <Button color="primary" onClick={() => this.toggle(spell)}>More Info</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        )
                                    })
                                    :
                                    (
                                        <Col md="4">
                                            <Card>
                                                <CardBody>
                                                    <CardTitle>Prestigitation</CardTitle>
                                                    <CardSubtitle>Level 0</CardSubtitle>
                                                    <br />
                                                    <CardText>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range': You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor...</CardText>
                                                    <Button>More Info</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Jumbotron>
                    </Col>
                </Row>
                {this.state.modal ? this.renderModal() : <div/>}
            </Container >
        )
    };
};

export default Spellbook;