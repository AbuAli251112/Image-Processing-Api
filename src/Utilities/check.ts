const checkAllParams = (arr: unknown[], items: unknown[]): boolean => {
  return arr.every((item) => items.indexOf(item) !== -1);
};

// Checks if the items in an array are all numbers
const checkWidthAndHeight = (arr: unknown[]): boolean => {
  return arr.every((item) => Number.isInteger(item));
};

export { checkAllParams, checkWidthAndHeight };
