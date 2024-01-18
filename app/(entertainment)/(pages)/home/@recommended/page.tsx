import { getRecommendedEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardList } from '@/app/(entertainment)/components/media-card-list';

export default async function RecommendedPage() {
  const entertainments = await getRecommendedEntertainments();

  return <MediaCardList entertainments={entertainments} title='Recommended for you' />;
}
