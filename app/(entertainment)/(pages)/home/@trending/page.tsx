import { getTrendingEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardsHorizontalList } from '@/app/(entertainment)/components/cards-horizontal-list';

export default async function TrendingPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';
  const entertainments = await getTrendingEntertainments(searchQuery);

  return <MediaCardsHorizontalList entertainments={entertainments} title='Trending' />;
}
