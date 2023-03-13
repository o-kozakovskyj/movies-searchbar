import FavoriteList from "@/components/FavoriteList";
import Layout from "@/components/Layout";
import MoviePage from "@/components/MoviePage";
import { NextPage } from "next";

const SerchedMovies: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoviePage />
      </Layout>
    </>
  )
}
export default SerchedMovies;