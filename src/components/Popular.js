


const Popular =({popularMovies}) =>{
     
     const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0, maxLength)} ...`;}
    return (
        
       
    <div className="row overflow-hidden">
      {popularMovies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
                        <div className="card mb-4 shadow-sm" >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{truncateOverview(movie.overview, 100)}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <h2><span className="badge badge-info">{movie.vote_average}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                

      ))}
      </div>
      
    
    );
};
export default Popular;