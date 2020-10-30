// React is component based design, and every single row here is a row
//  U write a Componenet and can reuse it using props-properties
import "./App.css";
import Row from "./Row";
import requests from './request';

function App() {
  //useState is a react hook



  return (
    <div className="App">
      <h1>Hay Programmer Let's Build Netflix clone FrontEnd 🚀  </h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
