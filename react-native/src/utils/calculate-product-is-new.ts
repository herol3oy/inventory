export const calculateProductIsNew = (date: string): boolean => {
  const productPosted: Date = new Date(date);

  const today: Date = new Date();
  const sevenDaysAgo: Date = new Date(today);

  sevenDaysAgo.setDate(today.getDate() - 7);

  return productPosted >= sevenDaysAgo;
};
