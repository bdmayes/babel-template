import log from "llog";

/**
 * Concatenates x to "the stuff plus " and returns it.
 *
 * @param {number} x A number to concatenate.
 * @returns {string} A string that says "the stuff plus " and x.
 */
export const someFunction = (x) => {
  log.info("I do things");
  return `the stuff plus ${x}`;
};
