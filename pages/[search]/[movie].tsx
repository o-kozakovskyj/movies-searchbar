import { NextPage } from "next";
import FavoriteList from "../../src/components/FavoriteList";
import Layout from "../../src/components/Layout";
import MoviePage from "../../src/components/MoviePage";

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