import { getRecommendedEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardsGrid } from '@/app/(entertainment)/components/cards-grid';

export default async function RecommendedPage() {
  const entertainments = await getRecommendedEntertainments();

  return <MediaCardsGrid entertainments={entertainments} title='Recommended for you' />;
}
