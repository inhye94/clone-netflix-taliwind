export const TvCard = ({ data }) => {
  return (
    <article className="flex flex-col gap-4">
      <header className="order-2">
        <h2 className="text-lg font-semibold">
          {data.original_name} ({data.name})
        </h2>
        <dl>
          <dt className="visually-hidden">평점</dt>
          <dd>
            <span aria-hidden>⭐️ </span>
            {data.vote_average.toFixed(1)}
          </dd>
        </dl>
      </header>
      <div className="order-1 aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={`${data.original_name} 포스터 이미지`}
          className="object-cover h-full w-full"
        />
      </div>
    </article>
  );
};
