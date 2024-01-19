import { getTrendingEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardsHorizontalList } from '@/app/(entertainment)/components/cards-horizontal-list';

export default async function TrendingPage() {
  const entertainments = await getTrendingEntertainments();

  return <MediaCardsHorizontalList entertainments={entertainments} title='Trending' />;
}
