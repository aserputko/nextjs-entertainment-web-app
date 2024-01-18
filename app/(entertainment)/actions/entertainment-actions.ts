'use server';

import { revalidateTag } from 'next/cache';

/***************************/
/** Entertainment Entities */
/***************************/
export interface EntertainmentEntity {
  id: string;
  title: string;
  category: string;
  rating: string;
  thumbnail: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const ENTERTAINMENT_TAG = 'entertainments';

/****************************/
/** Entertainment Use Cases */
/****************************/
export async function getTrendingEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'true', title: seqrchQuery });
  return fetchEntertainments(queryParams);
}

export async function getRecommendedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isTrending: 'false', title: seqrchQuery });
  return await fetchEntertainments(queryParams);
}

export async function getMovieEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'Movie', title: seqrchQuery });
  return await fetchEntertainments(queryParams);
}

export async function getTVSeriesEntertainments(seqrchQuery = ''): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ category: 'TV Series', title: seqrchQuery });
  return await fetchEntertainments(queryParams);
}

export async function getBookmarkedEntertainments(
  seqrchQuery = '',
): Promise<EntertainmentEntity[]> {
  const queryParams = new URLSearchParams({ isBookmarked: 'true', title: seqrchQuery });
  return await fetchEntertainments(queryParams);
}

export async function bookmarkEntertainment(id: string) {
  const entertainment = await fetchEntertainment(id);

  if (!entertainment) {
    throw new Error(`Entertainment with id ${id} not found`);
  }

  entertainment.isBookmarked = true;

  const updatedEntertainment = await updateEntertainment(id, entertainment);

  revalidateTag(ENTERTAINMENT_TAG);

  return updatedEntertainment;
}

export async function unbookmarkEntertainment(id: string) {
  const entertainment = await fetchEntertainment(id);

  if (!entertainment) {
    throw new Error(`Entertainment with id ${id} not found`);
  }

  entertainment.isBookmarked = false;

  const updatedEntertainment = await updateEntertainment(id, entertainment);

  revalidateTag(ENTERTAINMENT_TAG);

  return updatedEntertainment;
}

/***********************/
/** Entertainment API */
/**********************/
const API_URL = 'https://62c757292b03e73a58e3af6a.mockapi.io';

function fetchEntertainments(queryParams: URLSearchParams): Promise<EntertainmentEntity[]> {
  return fetch(`${API_URL}/entertainments?${queryParams}`, {
    cache: 'no-cache',
    next: { tags: [ENTERTAINMENT_TAG] },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === 'Not found') {
        return [];
      }
      return data;
    });
}

function fetchEntertainment(id: string): Promise<EntertainmentEntity> {
  return fetch(`${API_URL}/entertainments/${id}`, {
    cache: 'no-cache',
    next: { tags: [ENTERTAINMENT_TAG] },
  }).then((res) => res.json());
}

function updateEntertainment(
  id: string,
  entertainment: Omit<EntertainmentEntity, 'id'>,
): Promise<EntertainmentEntity> {
  return fetch(`${API_URL}/entertainments/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entertainment),
  }).then((res) => res.json());
}
