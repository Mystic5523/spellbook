import React, { Component } from 'react';
import { Container, Row, Col, Table, Button, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";
import API from '../components/utils/API'


class Spelllist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spells: [],
            selected: {},
            selectAll: false,
        }
    }

    componentDidMount() {
        API.getSpells().then(res => {
            this.setState({ spells: res.data });
        }
        )
    }

    selectSpell(spell){
        const selected = this.state.selected;
        if(!!selected[spell._id]){
            delete selected[spell._id];
            return this.setState({selected: selected, selectAll: false});
        }

        selected[spell._id]= spell;
        this.setState({selected: selected});

    }

    selectAll(){
        const selected = {};

        if(this.state.selectAll){
            return this.setState({selected: selected, selectAll: !this.state.selectAll});
        }

        this.state.spells.forEach(spell => {
            selected[spell._id] = spell
        });
        this.setState({selected: selected, selectAll: !this.state.selectAll});
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div>
                            <div>Selected ({Object.values(this.state.selected).length})</div>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>Level</th>
                                        <th>Name</th>
                                        <th>Concentration</th>
                                        <th>Ritual</th>
                                        <th>School</th>
                                        <th>
                                            <label className="check">
                                                <input type="checkbox" onChange={this.selectAll.bind(this)} checked={this.state.selectAll}/>
                                                <span className="checkmark"></span>
                                            </label>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.spells.length ?
                                        this.state.spells.map(spell => {
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
                                                        <label className="check">
                                                            <input type="checkbox" onChange={this.selectSpell.bind(this,spell)} checked={!!this.state.selected[spell._id]}/>
                                                            <span className="checkmark"></span>
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
                                                <td>Didn't Load</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>Transmutation</td>
                                                <td><label className="check">
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
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
