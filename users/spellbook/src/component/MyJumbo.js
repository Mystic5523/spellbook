import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">User's SpellBook</h1>
          <p className="lead">This is supposed to be words about the SpellBook</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;