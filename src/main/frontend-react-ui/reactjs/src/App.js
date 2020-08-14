import React, { Component } from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import history from './components/history';

import AuthService from "./services/auth.service";

import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Movie from "./components/Movie";
import TVShow from "./components/TVShow";
import Watchlist from "./components/Watchlist";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      searchquery: "flipper",
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };

    

  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <Router history={history}>
      
        <div>
          <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
              <img
                src="https://img.icons8.com/nolan/2x/movie.png"
                height="40px"
              />
              STREAM
            </Link>
            <div className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to={"addTV"} className="nav-link">
                  TV Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"addMovie"} className="nav-link">
                  {" "}
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"list"} className="nav-link">
                  Watchlist
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}

              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={"/register"} className="nav-link">
                        Sign Up
                    </Link>
                    </li>
                  </div>
                )}
            </div>
            <Form inline>
              <FormControl
                id="searchField"
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info" onClick={event =>  window.location.href='/search_results'}>Search</Button>
            </Form>
          </Navbar>
          <div>
            <Route path="/" exact component={Welcome} />
          </div>
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  <Route path="/user" component={Watchlist} />
                  <Route path="/mod" component={BoardModerator} />
                  <Route path="/admin" component={BoardAdmin} />
                  <Route path="/addTV" exact component={TVShow} />
                  <Route path="/addMovie" exact component={Movie} />
                  <Route path="/list" exact component={Watchlist} />
                  <Route exact path="/search_results" render={() => <SearchResults search={this.state.searchquery}/>} />
                </Switch>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;