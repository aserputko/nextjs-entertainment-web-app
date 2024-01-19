'use server';

import { NotFoundException } from '@/app/exceptions/not-found-exception';
import { revalidateTag } from 'next/cache';
import {
  EntertainmentEntity,
  bookmarkEntertainmentEntity,
  unbookmarkEntertainmentEntity,
} from '../entities/entertainment-entities';
import {
  ENTERTAINMENT_API_TAG,
  findManyEntertainments,
  findOneEntertainment,
  updateEntertainment,
} from '../services/entertainment-api-service';

/** View Trending Entertainments */
export async function getTrendingEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'true', title: seqrchQuery });
  return findManyEntertainments(queryParams);
}

/** View Trending Entertainments */
export async function getRecommendedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'false', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** View Movies Entertainments */
export async function getMovieEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'Movie', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** View TV Series Entertainments */
export async function getTVSeriesEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'TV Series', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** View Bookmarked Entertainments */
export async function getBookmarkedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isBookmarked: 'true', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** Bookmark an Entertainment by ID */
export async function bookmarkEntertainment(id: string) {
  let entertainment = await findOneEntertainment(id);

  if (!entertainment) {
    throw new NotFoundException(`Entertainment with id ${id} not found`);
  }

  entertainment = bookmarkEntertainmentEntity(entertainment);

  const updatedEntertainment = await updateEntertainment(id, entertainment);

  revalidateTag(ENTERTAINMENT_API_TAG);

  return updatedEntertainment;
}

/** Unbookmark an Entertainment by ID */
export async function unbookmarkEntertainment(id: string) {
  let entertainment = await findOneEntertainment(id);

  if (!entertainment) {
    throw new NotFoundException(`Entertainment with id ${id} not found`);
  }

  entertainment = unbookmarkEntertainmentEntity(entertainment);

  const updatedEntertainment = await updateEntertainment(id, entertainment);

  revalidateTag(ENTERTAINMENT_API_TAG);

  return updatedEntertainment;
}
