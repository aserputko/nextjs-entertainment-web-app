import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSearchTitle(resultCount: number, searchQuery: string) {
  const result = resultCount > 1 ? 'results' : 'result';
  return `Found ${resultCount} ${result} for '${searchQuery}'`;
}
