import { NextPage } from "next";
import FavoriteList from "../../src/components/FavoriteList";
import Layout from "../../src/components/Layout"
import MoovieList from "../../src/components/MooviesList"

const SerchedMovies: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoovieList />
      </Layout>
    </>
  )
}
export default SerchedMovies;