import Home from "pages/home/Home";
import Movies from "pages/home/movies/Movies";
import {Routes,Route} from "react-router-dom"
import Navbar from "./navbar/Navbar";
import axios from "axios";
import { useEffect } from "react";
export const App = () => {
  useEffect(() => {
    featchList()
  }, []);

  const featchList = async()=> {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=c6e9b7c96f38b5cb905b48bfd5d42375`
      );
      // setisVisible(page < Math.ceil(response.data.total/12))
      // const response = await searchImages(search, page);
      console.log(response);
      return response;
    } catch (error) {
      // setError(error)
    } finally {
      // setIsEmpty(false)
      // setLoading(false)
      
    }
};



  return (
    <>
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
     </Routes>
     </>
    
  );
};
