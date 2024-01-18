import { getBookmarkedEntertainments } from '../../actions/entertainment-actions';
import { MediaCardList } from '../../components/media-card-list';

export default async function BookmarkedPage() {
  const entertainments = await getBookmarkedEntertainments();

  return <MediaCardList entertainments={entertainments} title='Bookmarked' />;
}
