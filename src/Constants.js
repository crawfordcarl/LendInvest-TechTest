// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

export const secondsToReadable = (seconds) => {
  if (!seconds) { return 'Ended.'; }
  /* should really use momentjs */
  var numdays = Math.floor(seconds / 86400);
  return `${numdays} ${numdays === 1 ? 'day' : 'days'}`;
}
