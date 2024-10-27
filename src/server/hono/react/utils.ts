export function mergeHeaders(
  ...headersArray: (Headers | null | undefined)[]
): Headers {
  const mergedHeaders = new Headers();

  headersArray.forEach((headers) => {
    if (headers) {
      headers.forEach((value, key) => {
        mergedHeaders.set(key, value);
      });
    }
  });

  return mergedHeaders;
}
