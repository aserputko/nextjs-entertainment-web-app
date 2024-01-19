import { getBookmarkedEntertainments } from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function BookmarkedPage() {
  const entertainments = await getBookmarkedEntertainments();

  return (
    <>
      <Search placeholder='Search for bookmarked shows' />
      <MediaCardsGrid entertainments={entertainments} title='Bookmarked' />
    </>
  );
}
