import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsComp from './components/ActorsView';
import ActorModel from './data-models/ActorModel';

function App() {
  const actorsData = [];
  actorsData.push(new ActorModel("Gal", "Gadot", "April 30, 1985", 
    "https://www.bing.com/images/blob?bcid=RCigbsR9E0MC5CZ0NUjLlx6.mkrh.....xA", 
      "https://www.imdb.com/name/nm2933757/?ref_=nm_mv_close"));
  actorsData.push(new ActorModel("Brad", "Pitt", "December 18, 1963", 
    "https://www.bing.com/images/blob?bcid=RFw3MqbU9EMC5CZ0NUjLlx6.mkrh.....wI", 
      "https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"));
  actorsData.push(new ActorModel("Madonna", "", "August 16, 1958", 
    "https://www.bing.com/images/blob?bcid=RMhwIbnS5UMC5CZ0NUjLlx6.mkrh.....7I", 
      "https://www.imdb.com/name/nm0000187/?ref_=nv_sr_srsg_3"));
  return (
    <Container>
      <h1>Actors Gallery</h1>
      <p></p>
      <ActorsComp actors={actorsData}/>
    </Container>
  );
}

export default App;
