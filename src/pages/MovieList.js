import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components";
import { useEffect } from "react";

export const MovieList = ({ apiPath, titile }) => {

  const { data: movies } = useFetch(apiPath);
  
  useEffect(() => {
    document.title = titile
  }
  );

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
};
