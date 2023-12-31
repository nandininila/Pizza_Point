export function stringToNumber(string) {
    const asciiStr = encodeURIComponent(string);
    const chars = asciiStr.split("");

    const hexChars = chars.map((ch) =>
        ch.codePointAt(0).toString(16).padStart(2, "0")
    );

    const hexNumber = hexChars.join("");
    const m = BigInt(`0x${hexNumber}`);

    return m;
}