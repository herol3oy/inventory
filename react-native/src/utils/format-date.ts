export const formatDate = (date: string): string => {
  const parsedDate: Date = new Date(date);

  const day: string = parsedDate.getUTCDate().toString().padStart(2, "0");
  const month: string = (parsedDate.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0");
  const year: string = parsedDate.getUTCFullYear().toString();

  return `${day}.${month}.${year}`;
};
