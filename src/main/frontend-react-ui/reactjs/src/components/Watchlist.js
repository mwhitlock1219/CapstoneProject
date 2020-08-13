import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

export default class Watchlist extends Component {
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Watchlist</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Director</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center">
                                <td colSpan="6">No TV Shows or Movies Available</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        );
    }
}

{/* <Card className={"border border-dark bg-dark text-white"}>
<Card.Img variant="top" src="#" />
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
        Using as a place holder atm to later insert movies. Possibly make into a component
</Card.Text>
</Card.Body>

</Card> */}