import React, { Component } from 'react';

import { Card, Table, Image, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlusSquare, faBacon } from '@fortawesome/free-solid-svg-icons'

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchresults: []
        };
    }




    componentDidMount() {
        // will 'fetch'/return api data
        fetch("https://api.themoviedb.org/3/search/multi?api_key=b644ab6b14fc5346cabffe34357d92a0&query="+ this.props.search +"&page=1")
            .then(response => response.json())
            .then(
                //handle the results
                (data) => {
                    console.log(data.results);
                    this.setState({
                        searchresults: data.results
                    });
                }

            )

    }

    render() {

        console.log(this.props);
        const { searchresults } = this.state;
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> results Shows</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Add Watchlist</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Overview</th>
                                <th>Release date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchresults.map((results) => (
                                <tr key={results.id} align="center">
                                    <td>
                                        <ButtonGroup>
                                            <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPlusSquare} /></Button>{" "}
                                            <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faBacon} /></Button>
                                        </ButtonGroup>
                                    </td>
                                    <td >
                                        <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} />
                                    </td>
                                    <td >{results.media_type == "movie" ? results.title : results.name}</td>
                                    <td >{results.overview}</td>
                                    <td >{results.media_type == "movie" ? results.release_date : results.first_air_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

        );

    }


}
