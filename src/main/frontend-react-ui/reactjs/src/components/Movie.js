import React, { Component } from 'react';

import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: []
        };
    }

    // tv url = https://api.themoviedb.org/3/tv/popular?api_key=b644ab6b14fc5346cabffe34357d92a0&language=en-US&page=1

    componentDidMount() {
        // will 'fetch'/return api data
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b644ab6b14fc5346cabffe34357d92a0&language=en-US&page=1")
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

        const imageURL = "https://image.tmdb.org/t/p/w200";

        console.log(this.state);

        const { titles } = this.state;
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Watchlist</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Overview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {titles.map((movie) => (
                                <tr key={movie.id} align="center">
                                    <td >
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    </td>
                                    <td >
                                        <div>{movie.title}</div>
                                    </td>
                                    <td >
                                        <div>{movie.overview}</div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        );
    }
}
