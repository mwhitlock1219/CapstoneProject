import React from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Movie from './components/Movie';
import TVShow from './components/TVShow';
import Watchlist from './components/Watchlist';
import Footer from './components/Footer';

function App() {
  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <NavBar />
      <div>
        <Route path="/" exact component={Welcome} />
      </div>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/addTV" exact component={TVShow} />
              <Route path="/addMovie" exact component={Movie} />
              <Route path="/list" exact component={Watchlist} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer style={marginTop} />
    </Router>
  );
}

export default App;