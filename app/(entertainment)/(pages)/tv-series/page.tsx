import { getTVSeriesEntertainments } from '../../actions/entertainment-actions';
import { MediaCardList } from '../../components/media-card-list';

export default async function TVSeriesPage() {
  const entertainments = await getTVSeriesEntertainments();

  return <MediaCardList entertainments={entertainments} title='TV Series' />;
}
