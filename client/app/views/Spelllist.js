import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";
import API from '../components/utils/API'


class Spelllist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spells: []
        }
    }

    componentDidMount() {
        API.getSpells().then(res => {
            console.log(res);
            this.setState({ spells: res.data });
        }
        )
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>Level</th>
                                        <th>Name</th>
                                        <th>Concentration</th>
                                        <th>Ritual</th>
                                        <th>School</th>
                                        <th>Selected</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.spells.length ?
                                        this.state.spells.map(spell => {
                                            console.log(spell)
                                            return (
                                                <tr key={spell._id} scope="row">
                                                    <th >
                                                        <Link to={"/spells/" + spell._id}>
                                                            {spell.level}                                                           
                                                        </Link>
                                                    </th>
                                                    <td>{spell.name}</td>
                                                    <td>{spell.concentration}</td>
                                                    <td>{spell.ritual}</td>
                                                    <td>{spell.school}</td>
                                                    <td>
                                                        <label class="check">
                                                            <input type="checkbox" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </td>
                                                </tr>

                                            )
                                        })
                                        :
                                        (
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>0</td>
                                                <td>Prestidigitation</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>Transmutation</td>
                                                <td><label class="check">
                                                    <input type="checkbox" />
                                                    <span class="checkmark"></span>
                                                </label></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                            <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Spelllist;
