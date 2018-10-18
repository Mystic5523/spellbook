import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Table } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody
} from 'reactstrap';


class Spellbook extends Component {
    // state = {

    // }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle>Prestigitation</CardTitle>
                                    <CardSubtitle>Level 0</CardSubtitle>
                                    <br />
                                    <CardText>This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within 'range': You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor...</CardText>
                                    <Button>More Info</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Magic Missile</CardTitle>
                                    <CardSubtitle>Level 1</CardSubtitle>
                                    <br />
                                    <CardText>You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target...</CardText>
                                    <Button>More Info</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <CardTitle>Invisibility</CardTitle>
                                    <CardSubtitle>Level 2</CardSubtitle>
                                    <br />
                                    <CardText>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the targetâ€™s person. The spell ends for a target that attacks or casts a spell.</CardText>
                                    <Button>More Info</Button>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Spellbook;