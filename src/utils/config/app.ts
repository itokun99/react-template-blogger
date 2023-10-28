/**
 * Helper for get config from window object
 * @returns app config
 */
export function getConfig() {
  const w = window as unknown as { __REACT_TEMPLATE_BLOGGER__: object };
  const configs = w?.__REACT_TEMPLATE_BLOGGER__ as {
    configId?: string;
    configUrl?: string;
  };
  return configs;
}
