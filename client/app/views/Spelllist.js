import React, { Component } from 'react';
import { Container, Row, Col, Table, Label, Input } from 'reactstrap';

  

class Spelllist extends Component {
    // state = {

    // }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Level</th>
                                        <th>Name</th>
                                        <th>Concentration</th>
                                        <th>Ritual</th>
                                        <th>School</th>
                                        <th>Selected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>0</td>
                                        <td>Prestidigitation</td>
                                        <td>No</td>
                                        <td>No</td>
                                        <td>Transmutation</td>
                                        <td><Label check>
                                            <Input type="checkbox" />{' '}
                                        </Label></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>1</td>
                                        <td>Magic Missile</td>
                                        <td>No</td>
                                        <td>No</td>
                                        <td>Evocation</td>
                                        <td><Label check>
                                            <Input type="checkbox" />{' '}
                                        </Label></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2</td>
                                        <td>Invisibility</td>
                                        <td>Yes</td>
                                        <td>No</td>
                                        <td>Illusion</td>
                                        <td><Label check>
                                            <Input type="checkbox" />{' '}
                                        </Label></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Spelllist;
