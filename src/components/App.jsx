import Movies from "pages/movies/Movies";
import Home from "../components/home/Home";
import {Routes,Route} from "react-router-dom"
import Navbar from "./navbar/Navbar";
import MoviePage from "pages/movies/moviePage/MoviePage";

export const App = () => {


  return (
    <>
    <Navbar/>

     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/movies/:id" element={<MoviePage/>}/>
      <Route path="*" element={<div>EROR.......</div>}/>
     </Routes>
     </>
  )
}