import { NextPage } from "next";
import FavoriteList from "../../src/components/FavoriteList";
import Layout from "../../src/components/Layout"
import MoviesList from "../../src/components/MoviesList"

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