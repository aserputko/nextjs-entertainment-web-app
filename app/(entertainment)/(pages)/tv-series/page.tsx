import { getTVSeriesEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function TVSeriesPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';
  const entertainments = await getTVSeriesEntertainments(searchQuery);

  return (
    <>
      <Search placeholder='Search for TV series' />
      <MediaCardsGrid entertainments={entertainments} title='TV Series' />
    </>
  );
}
