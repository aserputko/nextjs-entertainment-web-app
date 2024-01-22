import { getSearchTitle } from '@/lib/utils';
import {
  getBookmarkedMoviesEntertainments,
  getBookmarkedTVSeriesEntertainments,
  searchBookmarkedEntertainments,
} from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function BookmarkedPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';

  const searchedBookmarkedEntertainments = searchQuery
    ? await searchBookmarkedEntertainments(searchQuery)
    : [];

  const bookmarkedMoviesEntertainments = !searchQuery
    ? await getBookmarkedMoviesEntertainments()
    : [];
  const bookmarkedTVSeriesEntertainments = !searchQuery
    ? await getBookmarkedTVSeriesEntertainments()
    : [];

  return (
    <>
      {/* Search Input */}
      <Search placeholder='Search for bookmarked shows' />

      {/* Search Result */}
      {!!searchedBookmarkedEntertainments.length && (
        <MediaCardsGrid
          entertainments={searchedBookmarkedEntertainments}
          title={getSearchTitle(searchedBookmarkedEntertainments.length, searchQuery)}
        />
      )}

      {/* Bookmarked Movie */}
      {!!bookmarkedMoviesEntertainments.length && (
        <MediaCardsGrid entertainments={bookmarkedMoviesEntertainments} title='Bookmarked Movies' />
      )}

      {/* Bookmarked TVSeries */}
      {!!bookmarkedTVSeriesEntertainments.length && (
        <MediaCardsGrid
          entertainments={bookmarkedTVSeriesEntertainments}
          title='Bookmarked TV Series'
        />
      )}
    </>
  );
}
