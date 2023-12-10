export const isObjectFalsy = (obj) => {
    return Object.values(obj).every(value => !value);
}