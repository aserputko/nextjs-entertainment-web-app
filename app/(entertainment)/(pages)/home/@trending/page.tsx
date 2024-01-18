import { getTrendingEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardList } from '@/app/(entertainment)/components/media-card-list';

export default async function TrendingPage() {
  const entertainments = await getTrendingEntertainments();

  return <MediaCardList entertainments={entertainments} title='Trending' />;
}
