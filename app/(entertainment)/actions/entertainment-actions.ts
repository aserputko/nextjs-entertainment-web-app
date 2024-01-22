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

/** Get Trending Entertainments */
export async function getTrendingEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'true', title: seqrchQuery });
  return findManyEntertainments(queryParams);
}

/** Get Recommended Entertainments */
export async function getRecommendedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'false', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** Get All Entertainments by Seqrch Query */
export async function getAllEntertainmentsBySeqrchQuery(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** Get Movies Entertainments */
export async function getMoviesEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'Movie', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** Get TV Series Entertainments */
export async function getTVSeriesEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'TV Series', title: seqrchQuery });
  return await findManyEntertainments(queryParams);
}

/** Get Bookmarked Movies Entertainments */
export async function getBookmarkedMoviesEntertainments(): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({
    isBookmarked: 'true',
    category: 'Movie',
  });
  return await findManyEntertainments(queryParams);
}

/** Get Bookmarked TV Series Entertainments */
export async function getBookmarkedTVSeriesEntertainments(): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({
    isBookmarked: 'true',
    category: 'TV Series',
  });
  return await findManyEntertainments(queryParams);
}

/** Get Bookmarked Entertainments by Seqrch Query */
export async function searchBookmarkedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({
    isBookmarked: 'true',
    title: seqrchQuery,
  });
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
