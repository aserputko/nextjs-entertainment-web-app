import { getMovieEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function MoviesPage() {
  const entertainments = await getMovieEntertainments();

  return (
    <>
      <Search placeholder='Search for movies' />
      <MediaCardsGrid entertainments={entertainments} title='Movies' />
    </>
  );
}
