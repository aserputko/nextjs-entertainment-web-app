import { getBookmarkedEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function BookmarkedPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';
  const entertainments = await getBookmarkedEntertainments(searchQuery);

  return (
    <>
      <Search placeholder='Search for bookmarked shows' />
      <MediaCardsGrid entertainments={entertainments} title='Bookmarked' />
    </>
  );
}
