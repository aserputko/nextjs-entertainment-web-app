import { getRecommendedEntertainments } from '@/app/(entertainment)/actions/entertainment-actions';
import { MediaCardsGrid } from '@/app/(entertainment)/components/cards-grid';

export default async function RecommendedPage({ searchParams }: { searchParams?: { s?: string } }) {
  const searchQuery = searchParams?.s || '';
  const entertainments = await getRecommendedEntertainments(searchQuery);

  return <MediaCardsGrid entertainments={entertainments} title='Recommended for you' />;
}
