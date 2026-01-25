import { MovieCard } from "../feature/list/components/MovieCard";
import { TvCard } from "../feature/list/components/TvCard";
import { PageLayout } from "../layouts/PageLayout";
import popularData from "../mock/popular.json";

export default function ListPage() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
    },
  };

  // fetch(
  //   "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  //   options,
  // )
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  return (
    <PageLayout>
      <section>
        <h2>인기 영화</h2>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {popularData.movie.results.map((item) => (
            <li key={item.id}>
              <MovieCard data={item} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>인기 TV 프로그램</h2>

        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {popularData.tv.results.map((item) => (
            <li key={item.id}>
              <TvCard data={item} />
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
