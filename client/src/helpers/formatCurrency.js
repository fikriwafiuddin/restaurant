export function formatCurrency(number) {
  const numberString = number.toString()

  const numberSection = numberString
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g)

  return numberSection.join(".").split("").reverse().join("")
}
