import axios from "axios";
import {useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function Home() {
  const [items,setItems]=useState([]);

  useEffect(() => {
    featchList().then(response => {
      setItems(response); 
   })
  },[] );

  // console.log(items);

  const featchList = async()=> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=c6e9b7c96f38b5cb905b48bfd5d42375`
      );
      return response.data.results;
    } catch (error) {
      // setError(error)
    } finally {
      // setIsEmpty(false)
    }
};
return(
  <>
  <h2>Trending today</h2>
  <ul>
  {items.map(({title,id,})=>{
    return(<li key={id} id={id}>
      <Link to={`/movies/${id}`} >{title}</Link>
        </li>
  );
})}
  </ul>
  </>
)
}
