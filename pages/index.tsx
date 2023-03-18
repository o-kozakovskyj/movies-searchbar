import FavoriteList from "@/components/FavoriteList";
import Layout from "@/components/Layout";
import MoviesList from "@/components/MoviesList";
import { NextPage } from "next";
import type Movie from "@/entitles/Movie";


type SearchedMoviesProps = {
  list: Movie[];
  search: string;
}
const SearchedMovies: NextPage<SearchedMoviesProps> = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoviesList list={[]} search={''} />
      </Layout>
    </>
  )
}
export default SearchedMovies;