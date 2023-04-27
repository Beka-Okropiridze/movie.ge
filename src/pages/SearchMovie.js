import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

export const SearchMovie = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get('q');
  
  const { data: movies } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `${queryTerm.toUpperCase()}`
  })

  return (
    <main>
      <section className="py-7">
        <p className="text-2xl text-gray-700 dark:text-white">{movies.length === 0 ? `No Result Found For ${queryTerm}` 
        : `Result For ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}
