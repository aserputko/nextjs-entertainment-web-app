import { getMovieEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function MoviesPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';
  const entertainments = await getMovieEntertainments(searchQuery);

  return (
    <>
      <Search placeholder='Search for movies' />
      <MediaCardsGrid entertainments={entertainments} title='Movies' />
    </>
  );
}
