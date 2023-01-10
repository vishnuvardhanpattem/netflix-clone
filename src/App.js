import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
    <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
