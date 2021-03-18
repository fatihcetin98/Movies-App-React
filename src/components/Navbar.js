
import {MovieContext} from '../context/MovieContext';
import {useContext} from 'react';

const Navbar = () => {


    const { setActiveLink,activeLink} = useContext(MovieContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            FC MOVİE
          </a>
          <form>
            <button className="btn btn-outline-light  mx-2 " style={{color:  activeLink === "Popular" ? "#f8bc0b" :"#fff"}}  onClick={()=>{
            setActiveLink("Popular");
            
        }    }type="button">
              Popular Movies
            </button>
            <button className="btn btn-outline-light  mx-2" style={{color:  activeLink === "All Movies" ? "#f8bc0b" :"#fff"}}onClick={()=>{
            setActiveLink("All Movies");
            
        }    } type="button">
              All Movies
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
