import HomePage from 'components/pages/home';
import getMetadata from 'utils/get-metadata';

const Home = () => <HomePage />;

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js Tailwind Starter',
    description: 'Next.js Tailwind Starter',
    pathname: '/',
  });
}
