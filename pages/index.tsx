import FavoriteList from '../src/components/FavoriteList';
import Layout from '../src/components/Layout';
import SearchBar from '../src/components/SearchBox';
import type { NextPage } from 'next';
import MoovieList from '../src/components/MooviesList';

const Home: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MoovieList/>
      </Layout>
    </>
  )
}
export default Home;