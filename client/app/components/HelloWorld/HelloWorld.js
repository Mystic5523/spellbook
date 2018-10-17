import React from 'react';
import { Container, Row, Col, Jumbotron, Table } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody } from 'reactstrap';

const HelloWorld = () => (
  <Container fluid={true}>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <div>
          <Jumbotron>
            <h1 className="display-3">Welcome, User!</h1>
            <p className="lead">Build your chracter:</p>
            <Form>
              <FormGroup>
                <Label for="exampleSelect">Race</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Human</option>
                  <option>Elf</option>
                  <option>Dwarf</option>
                  <option>Halfling</option>
                  <option>Gnome</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Class</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Wizard</option>
                  <option>Cleric</option>
                  <option>Warlock</option>
                  <option>Sorcerer</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Level</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Form>
            <hr className="my-2" />
            <p className="lead">
            <Button color="primary">Save</Button>
          </p>
          </Jumbotron>
        </div>
      </Col>
    </Row>
    <br />
    <hr />
    <br />
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
    <br />
    <hr />
    <br />
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
);

export default HelloWorld;
