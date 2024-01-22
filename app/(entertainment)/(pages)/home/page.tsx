import { getSearchTitle } from '@/lib/utils';
import {
  getAllEntertainmentsBySeqrchQuery,
  getRecommendedEntertainments,
  getTrendingEntertainments,
} from '../../actions/entertainment-actions';
import { MediaCardsGrid } from '../../components/cards-grid';
import { Search } from '../../components/search';

export default async function HomePage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';

  const searchedEntertainments = searchQuery
    ? await getAllEntertainmentsBySeqrchQuery(searchQuery)
    : [];

  const trendingEntertainments = !searchQuery ? await getTrendingEntertainments() : [];
  const recommendedEntertainments = !searchQuery ? await getRecommendedEntertainments() : [];

  return (
    <>
      {/* Search Input */}
      <Search placeholder='Search for movies or TV series' />

      {/* Search Result */}
      {!!searchedEntertainments.length && (
        <MediaCardsGrid
          entertainments={searchedEntertainments}
          title={getSearchTitle(searchedEntertainments.length, searchQuery)}
        />
      )}

      {/* Trending */}
      {!!trendingEntertainments.length && (
        <MediaCardsGrid entertainments={trendingEntertainments} title='Trending' />
      )}

      {/* Recommended for you */}
      {!!recommendedEntertainments.length && (
        <MediaCardsGrid entertainments={recommendedEntertainments} title='Recommended for you' />
      )}
    </>
  );
}
