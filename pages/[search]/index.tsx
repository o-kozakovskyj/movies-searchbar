import FavoriteList from "@/components/FavoriteList";
import Layout from "@/components/Layout";
import MoviesList from "@/components/MoviesList";
import { getmovies } from "@/gateways/gateway";
import { NextPage } from "next";
import type Movie from "@/entitles/Movie";

export async function getServerSideProps(context: any) {
  const search = context.query.search as string;
  const res = await getmovies(search);
  return {
    props: {
      list: res.Search || [],
      search,
    }
  }
}
type SearchedMoviesProps = {
    list: Movie[];
    search: string;
}
const SearchedMovies: NextPage<SearchedMoviesProps> = ({list, search}) => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoviesList list ={list} search={search} />
      </Layout>
    </>
  )
}
export default SearchedMovies;