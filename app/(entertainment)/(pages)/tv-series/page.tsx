import { getTVSeriesEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function TVSeriesPage() {
  const entertainments = await getTVSeriesEntertainments();

  return (
    <>
      <Search placeholder='Search for TV series' />
      <MediaCardsGrid entertainments={entertainments} title='TV Series' />
    </>
  );
}
