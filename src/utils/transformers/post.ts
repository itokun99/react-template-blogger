import { PostLabel } from '@general-types';
import { removeDomainAndSubdomain } from '@utils';

/**
 * Helper for create array of object for post label
 * @param sourceLabels origin labels
 * @param maxLength number of label to shown
 * @returns type PostLabel[]
 */
export function createPostLabel(
  sourceLabels: string[] = [],
  maxLength?: number
): PostLabel[] {
  let tempLabels = [...sourceLabels];
  if (!tempLabels) return [];

  if (maxLength && maxLength > 0 && maxLength <= tempLabels.length) {
    tempLabels = tempLabels.slice(0, maxLength);
  }

  return tempLabels.map(value => ({
    title: value,
    url: `/search/label/${encodeURIComponent(value)}`
  }));
}

export function createPostUrl(url: string) {
  return removeDomainAndSubdomain(url);
}
