import { useEffect, useState } from "react";
import Movie from '../components/Movie';
import {Link} from "react-router-dom";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
           <h1>Loading...</h1>
           ) : (
            <div>
              {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
              ))}  
            </div>
      )}
      <button><Link to="/">돌아가기</Link></button>
    </div>
  );
}
export default MovieApp;