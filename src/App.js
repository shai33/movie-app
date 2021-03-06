import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsComp from './components/ActorsView';
import ActorModel from './data-models/ActorModel';
import MoviesPage from './components/MoviesPage';
import HomeComp from './components/HomePage';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      actorsData: []
    }
  }
  render(){
    return (
      <HashRouter>
      <Container>
      <nav className="navbar navbar-expand-md navbar-light bg-light ">
        <a href="/" className="navbar-brand text-primary">MOVIE-APP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 d-flex">
                <li className="nav-item">
                    <a className="nav-link" id="open-actors" href="/#/actors">Actors</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#/movies" id="open-movies">Movies</a>
                  </li>
                  <li className="nav-item ml-md-auto ml-sm-auto-0">
                    <a className="nav-link" href="/#/signup">Signup</a>
                  </li>
            </ul>
        </div>
    </nav>
    <div id="content" className="container ">
      <Switch>
      <Route exact path="/">
        <HomeComp/>
        </Route>
        <Route exact path="/actors">
        <h1>Actors Gallery</h1>
        <p></p>
        <ActorsComp actors={this.state.actorsData}/>
        {/* <ActorsComp actors={actorsData}/> */}
        </Route>
        <Route exact path="/movies">
        <MoviesPage/>
        </Route>
        </Switch>
        </div>
      </Container>
      </HashRouter>
    );
    
  }
  componentDidMount(){
    axios.get('/actors.json').then( (result) => {

      const newActors = result.data.map(actor => new ActorModel(actor.fname, actor.lname, actor.birthday, actor.image, actor.link))

      console.log('Ajax finished loading'); 
      this.setState({actorsData: newActors});
    });
    
    // returns result
  }
}
/*
function App(props) {
  const [actorsData, setActorsData] = useState([]);
  // const actorsData = [];
  // actorsData.push(new ActorModel("Gal", "Gadot", "April 30, 1985", 
  //   "https://www.bing.com/images/blob?bcid=RCigbsR9E0MC5CZ0NUjLlx6.mkrh.....xA", 
  //     "https://www.imdb.com/name/nm2933757/?ref_=nm_mv_close"));
  // actorsData.push(new ActorModel("Brad", "Pitt", "December 18, 1963", 
  //   "https://www.bing.com/images/blob?bcid=RFw3MqbU9EMC5CZ0NUjLlx6.mkrh.....wI", 
  //     "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"));
  // actorsData.push(new ActorModel("Madonna", "", "August 16, 1958", 
  //   "https://www.bing.com/images/blob?bcid=RMhwIbnS5UMC5CZ0NUjLlx6.mkrh.....7I", 
  //     "https://www.imdb.com/name/nm0000187/?ref_=nv_sr_srsg_3"));
  
  useEffect(() => {
    // gets the json
    // Code to put json in result
    // 'axios.get('/cars.json')' returns a Promise
    axios.get('/actors.json').then( (result) => {

      const newActors = result.data.map(actor => new ActorModel(actor.fname, actor.lname, actor.birthday, actor.image, actor.link))

      console.log('Ajax finished loading'); 
      setActorsData(newActors);
    })
    
    // returns result
  });

  return (
    <Container>
      <h1>Actors Gallery</h1>
      <p></p>
      <ActorsComp actors={actorsData}/>
    </Container>
  );
  
}
*/
export default App;
