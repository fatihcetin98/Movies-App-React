import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

import { MovieState } from "./context/MovieContext";

const App = () => {
  return (
    <MovieState>
      <Navbar />
      <div className="container">
        
          
          <SearchBar />
          
        
        <div>
          <MovieList />
        </div>
      </div>
    </MovieState>
  );
};

export default App;
