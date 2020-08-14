import React, { Component } from 'react';

import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusSquare, faBacon } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class TVShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: []
        };
    }


    componentDidMount() {
        // will 'fetch'/return api data
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=b644ab6b14fc5346cabffe34357d92a0&language=en-US&page=1")
            .then(response => response.json())
            .then(
                //handle the results
                (data) => {
                    console.log(data.results);
                    this.setState({
                        titles: data.results
                    });
                }

            )

    }


    render() {

        console.log(this.state);

        const { titles } = this.state;
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> TV Shows</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Add Watchlist</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Overview</th>
                                <th>Seasons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {titles.map((tv) => (
                                <tr key={tv.id} align="center">
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPlusSquare} /></Button>{" "}
                                            <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faBacon} /></Button>
                                        </ButtonGroup>
                                    </td>
                                    <td >
                                        <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} />
                                    </td>
                                    <td >{tv.name}</td>
                                    <td >{tv.overview}</td>
                                    <td >{tv.overview}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        );
    }
}