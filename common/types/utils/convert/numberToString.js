export function numberToString(m) {
    const formateNum = BigInt(m);
    let hexNumber = formateNum.toString(16);

    if (hexNumber.length % 2 === 1) {
        hexNumber = "0" + hexNumber;
    }

    const hexChars = hexNumber.match(/\w{2}/g);

    const chars = hexChars.map((hex) =>
        String.fromCodePoint(parseInt(hex, 16))
    );

    const asciiStr = chars.join("");
    const text = decodeURIComponent(asciiStr);

    return text;
}