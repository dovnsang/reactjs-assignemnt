export const isValidYear = (year) => {
    const start = 1900;
    const end = new Date().getFullYear()
    return !isNaN(year) && year >= start && year <= end
}