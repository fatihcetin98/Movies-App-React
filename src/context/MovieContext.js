import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

 export const MovieState = ({ children }) => {
  const API_KEY = "f4b1b91d7ac4b987e723df4d5372ab78";

  const [popularMovies, setPopularMovies] = useState([]);
  const [activeLink, setActiveLink] = useState("Popular");
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  
 

  popularMovies.sort((a,b)=>(a.vote_average<b.vote_average ? 1 : -1));

  const getPopularMovies = async () => {
    const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
 
    const response = await fetch(popularURL);
    const data = await response.json();

    setPopularMovies(data.results);
  };

  const handleSearch =  async (e) => {
    e.preventDefault();

    const searchAPİ ="https://api.themoviedb.org/3/search/movie?api_key=f4b1b91d7ac4b987e723df4d5372ab78&query=";
    if(search){
     const response = await fetch(searchAPİ + search );
     const data = await response.json();
     setMovies(data.results);
     setSearch("");
     
     
     

    }
    
    
  
  };
  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`;

    const response = await fetch(url);
    const data = await response.json();
    
      setMovies(data.results);
    
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    
    getMovies();
    
  }, []);

  return (
    <MovieContext.Provider
      value={{
        
        activeLink,
        setActiveLink,
        popularMovies,
        search,
        setSearch,
        movies,
        setMovies,
        getPopularMovies,
        getMovies,
        handleSearch,
        
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieState;
