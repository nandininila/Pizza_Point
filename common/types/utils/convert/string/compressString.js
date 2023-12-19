export function compressString(str) {
    let compressedString = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedString += str[i] + count;
            count = 1;
        }
    }
    return compressedString.length < str.length ? compressedString : str;
}