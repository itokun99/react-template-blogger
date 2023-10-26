import { PostLabel } from '@general-types';

// CREATE URL FOR SEARCH ON LABEL
export const createSearchUrl = (
  value: string = '',
  customPath?: string
): string => `${customPath || '/search/label/'}${value}`;

// RESIZE IMAGE FOR POST IMAGE
export const resizeImage = (
  image: string,
  width = 400,
  height = 400,
  crop = true
) => {
  const target = /\/s[0-9]+\-c/g;
  const result = `/w${width}-h${height}-${crop ? 'c' : ''}`;
  return image.replace(target, result);
};

// GET IMAGE
export function getImage(defaultImage: string, image?: string) {
  if (image) return image;
  return defaultImage;
}

export function getConfig() {
  const w = window as any;
  const configs = w?.__REACT_TEMPLATE_BLOGGER__ as {
    configId?: string;
    configUrl?: string;
  };
  return configs;
}

export function createPostLabel(
  soureLabels: string[] = [],
  maxLength?: number
): PostLabel[] {
  let tempLabels = [...soureLabels];
  if (!tempLabels) return [];

  if (maxLength && maxLength > 0 && maxLength <= tempLabels.length) {
    tempLabels = tempLabels.slice(0, maxLength);
  }

  return tempLabels.map(value => ({
    title: value,
    url: `/search/label/${encodeURIComponent(value)}`
  }));
}
export function removeDomainAndSubdomain(inputString: string) {
  // Match the protocol and capture the domain, file path (if present), and subdomain
  const pattern = /https?:\/\/(www\d?\.)?([^/]+)(\/[^?#]*)?/i;
  // Replace the matched pattern with just the file path or subdomain
  const result = inputString.replace(
    pattern,
    (_match, subdomain, domain, path) => {
      if (!path || path === '/') {
        return subdomain ? '' : domain; // No file path, retain subdomain or domain
      } else {
        return path; // File path exists, remove subdomain and domain
      }
    }
  );
  // Remove .html from the result
  return result.replace(/\.html$/i, '');
}

export function removeHtmlTags(
  inputString: string,
  limit?: number,
  endWord?: string
) {
  // Use a regular expression to match and remove both tags, their attributes, and replace newlines with spaces
  let result = inputString.replace(/<[^>]*>|[\r\n]/g, ' ');

  // Check if the result exceeds the character limit
  if (limit && result.length > limit) {
    // Trim the result to the specified character limit without breaking words
    result = result.substring(0, limit);
    // Remove any partial word at the end
    result = result.replace(/\s\w*$/, '');
  }

  // Trim the resulting string to remove leading and trailing spaces
  result = result.trim();

  // Add "[...]" at the end of the resulting string if it was trimmed and includeEllipsis is true
  if (endWord && result.length < inputString.length) {
    result += ` ${endWord}`;
  }

  return result;
}

export function createPostUrl(url: string) {
  return removeDomainAndSubdomain(url);
}

export function formatDate(inputDate: string, formatTemplate: string) {
  const date = new Date(inputDate);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  formatTemplate = formatTemplate.replace(
    'DD',
    day < 10 ? `0${day}` : `${day}`
  );
  formatTemplate = formatTemplate.replace('MMM', month);
  formatTemplate = formatTemplate.replace('YYYY', `${year}`);
  formatTemplate = formatTemplate.replace(
    'MM',
    (date.getMonth() + 1).toString().padStart(2, '0')
  );

  return formatTemplate;
}
