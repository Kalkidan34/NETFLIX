
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <Nav/>
    <Banner/>
     <Row title="NETFLIX ORIGINALS"
     fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
    />
     <Row title="Trending Now"
     fetchUrl={requests.fetchTrending}/>
     <Row title="Action Movies"
     fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"
     fetchUrl={requests.fetchComedyMovies}/>
 <Row title="Horror Movies"
     fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentary Movies"
     fetchUrl={requests.fetchDocumentaries}/>

<Row title="Romance Movies"
     fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="TopRated Movies"
     fetchUrl={requests.fetchTopRatedMovies}/>




    </div>
  );
}

export default App;







// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=55d84a9100d1ecc652b340df5adf3a5f


// https://api.themoviedb.org/3

// API Key (v3 auth)

// 55d84a9100d1ecc652b340df5adf3a5f