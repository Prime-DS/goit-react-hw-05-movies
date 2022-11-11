import { getMovieById } from "api/Api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
  

export default function MoviePage() {
    const [state, setState] = useState([]);
    const[loading, setLoading]=useState(false);
    const[error, setError]=useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchMovie = async () => {
            try {
                setError(null);
                setLoading(true);
                const result = await getMovieById(id);
                setState(result);
                
            } catch (e) {
                setError(e)
            } finally{
                setLoading(false)
            }
        }
        fetchMovie();
    },[id]);

    const goBack=() =>{
navigate(-1)
    };
    
const {genres,poster_path,original_title,overview}= state;

  return (
    <div>
        {loading && <div>Loading...</div>}
        {error && <p>Error ${error}</p>}
        {state &&(
            <>
            <button onClick={goBack}> Go back </button>
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="name movie"/>
            <div>
                <h2>{original_title}</h2>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                    <div>
                {genres && (
                    genres.map((genre, index) => {
                        return <p key={index}>{genre.name}</p>;
                      }
                    )
                ) }
                    </div>
            
                
            </div>
            </>
        )}
    </div>
  )
}
