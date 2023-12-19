export function compressStringOptimized(str) {
    const compressed = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed.push(str[i] + count);
            count = 1;
        }
    }
    const compressedString = compressed.join('');
    return compressedString.length < str.length ? compressedString : str;
}