import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';

export default class Watchlist extends Component {
    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Img variant="top" src="#" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>

            </Card>
        );
    }
}

