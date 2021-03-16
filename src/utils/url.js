/**
 * Get hash value of URL
 * - Example: http://abc.com#hello=world
 * - Result: {hello: 'world'}
 * 
 * @returns {Object} object of has value
 */
export function getURLHash() {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
}
