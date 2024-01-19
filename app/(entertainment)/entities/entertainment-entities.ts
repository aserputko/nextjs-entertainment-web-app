export interface EntertainmentEntity {
  id: string;
  title: string;
  category: EntertainmentCategory;
  rating: EntertainmentRating;
  thumbnail: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

const EntertainmentCategory = {
  UI: 'UI',
  UX: 'UX',
  Feature: 'Feature',
} as const;
export type EntertainmentCategory =
  (typeof EntertainmentCategory)[keyof typeof EntertainmentCategory];

const EntertainmentRating = {
  PG: 'PG',
  E: 'E',
  R18: '18+',
} as const;
export type EntertainmentRating = (typeof EntertainmentRating)[keyof typeof EntertainmentRating];

export function bookmarkEntertainmentEntity(
  entertainment: EntertainmentEntity,
): EntertainmentEntity {
  entertainment.isBookmarked = true;
  return entertainment;
}

export function unbookmarkEntertainmentEntity(
  entertainment: EntertainmentEntity,
): EntertainmentEntity {
  entertainment.isBookmarked = false;
  return entertainment;
}
