export function formatToDBDate(date: Date): string {
  let day = date.getDate();

  let month = date.getMonth();

  let year = date.getFullYear();

  return `${year}-${month}-${day < 10 ? "0" : ""}${day} 00:00:00`;
}
