import { useEffect, useState } from "react";
import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch("/api/movies")).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <HeadTitle title="Home" />
      {movies?.map((movie: any) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <Link
            key={movie.id}
            href={`movies/${movie.original_title}/${movie.id}`}>
            <h4>{movie.original_title}</h4>
          </Link>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
