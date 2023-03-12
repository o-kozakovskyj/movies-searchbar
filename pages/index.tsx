import FavoriteList from '../src/components/FavoriteList';
import Layout from '../src/components/Layout';
import type { NextPage } from 'next';
import MovieList from '../src/components/MoviesList';

const Home: NextPage = () => {
  return (
    <>
      <Layout aside={<FavoriteList />}>
        <MovieList />
      </Layout>
    </>
  )
}
export default Home;