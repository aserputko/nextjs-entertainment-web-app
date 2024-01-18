import { getMovieEntertainments } from '../../actions/entertainment-actions';
import { MediaCardList } from '../../components/media-card-list';

export default async function MoviesPage() {
  const entertainments = await getMovieEntertainments();

  return <MediaCardList entertainments={entertainments} title='Movies' />;
}
