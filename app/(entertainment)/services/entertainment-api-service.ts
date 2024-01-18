import { EntertainmentEntity } from '../entities/entertainment-entities';

const API_URL = 'https://62c757292b03e73a58e3af6a.mockapi.io';

export const ENTERTAINMENT_API_TAG = 'entertainments';

export function findManyEntertainments(
  queryParams: URLSearchParams,
): Promise<EntertainmentEntity[]> {
  return fetch(`${API_URL}/entertainments?${queryParams}`, {
    cache: 'no-cache',
    next: { tags: [ENTERTAINMENT_API_TAG] },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === 'Not found') {
        return [];
      }
      return data;
    });
}
export function findOneEntertainment(id: string): Promise<EntertainmentEntity> {
  return fetch(`${API_URL}/entertainments/${id}`, {
    cache: 'no-cache',
    next: { tags: [ENTERTAINMENT_API_TAG] },
  }).then((res) => res.json());
}

export function updateEntertainment(
  id: string,
  entertainment: Omit<EntertainmentEntity, 'id'>,
): Promise<EntertainmentEntity> {
  return fetch(`${API_URL}/entertainments/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entertainment),
  }).then((res) => res.json());
}
