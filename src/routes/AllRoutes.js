import { Routes, Route } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, SearchMovie } from '../pages';


export const AllRoutes = () => {
  return (
    <div className=" dark:bg-slate-800" >
        <Routes>
            <Route path="/" element={<MovieList apiPath='movie/now_playing' titile='Movies' />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath='movie/popular' titile='Popular Movies' />} />
            <Route path="movies/top" element={<MovieList apiPath='movie/top_rated' titile='Top Movies' />} />
            <Route path="movies/upcoming" element={<MovieList apiPath='movie/upcoming' titile='Upcoming Movies' />} />
            <Route path="search" element={<SearchMovie apiPath='search/movie' />} />
            <Route path="*" element={<PageNotFound />} />
            <Route />
        </Routes>
    </div>
  )
}
