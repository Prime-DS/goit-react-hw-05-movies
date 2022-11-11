import axios from "axios";
export const getMovieById = async(id)=>{
    const{data}= await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c6e9b7c96f38b5cb905b48bfd5d42375`
    )
    return data;
}