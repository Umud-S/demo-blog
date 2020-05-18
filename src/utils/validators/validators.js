export const required = (value) => {
    if (value) return undefined
    else return 'Field is required';
}
export const maxLengthCreater = (maxLength) => {
    return (value) => {
        if (value.length > maxLength) return `Max Length is ${maxLength} Symbols`;
        else return undefined;
    }
}
