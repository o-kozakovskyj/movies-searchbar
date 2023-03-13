import FavoriteList from "@/components/FavoriteList";
import Layout from "@/components/Layout";
import MoviesList from "@/components/MoviesList";
import { NextPage } from "next";

const SerchedMovies: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoviesList />
      </Layout>
    </>
  )
}
export default SerchedMovies;