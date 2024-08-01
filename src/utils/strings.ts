export function capitalizeFirstLetter(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}
