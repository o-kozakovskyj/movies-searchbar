import { NextPage } from "next";
import FavoriteList from "../../src/components/FavoriteList";
import Layout from "../../src/components/Layout";
import MooviePage from "../../src/components/MooviePage";

const SerchedMovies: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MooviePage />
      </Layout>
    </>
  )
}
export default SerchedMovies;