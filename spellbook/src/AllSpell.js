import React from 'react';
import { Table } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Lvl</th>
            <th>Name</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}