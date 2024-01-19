import { Search } from '../../components/search';

export default async function HomePage(props: any) {
  console.log(props);

  return (
    <>
      <Search placeholder='Search for movies or TV series' />
    </>
  );
}
