const HTML_FONT_SIZE = 16;

const min_width = 320;
const max_width = 1200;

const DEFAULT_MIN_SCREEN = min_width / HTML_FONT_SIZE; // (rem)
const DEFAULT_MAX_SCREEN = max_width / HTML_FONT_SIZE; // (rem)

const cleanNumber = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const remValue = (num) => `${cleanNumber(Number(num))}rem`;

//
const getPreferredValue = (minSize, maxSize, minScreenSize, maxScreenSize) => {
    const vwCalc = cleanNumber(
        (100 * (maxSize - minSize)) / (maxScreenSize - minScreenSize)
    );

    const remCalc = cleanNumber(
        (minScreenSize * maxSize - maxScreenSize * minSize) /
        (minScreenSize - maxScreenSize)
    );

    return `${vwCalc}vw + ${remValue(remCalc)}`;
};
//

export const createFluidValue = (
    minSize,
    maxSize,
    minScreenSize = DEFAULT_MIN_SCREEN,
    maxScreenSize = DEFAULT_MAX_SCREEN
) => {
    return `clamp(${remValue(minSize)}, ${getPreferredValue(
        minSize,
        maxSize,
        minScreenSize,
        maxScreenSize
    )}, ${remValue(maxSize)})`;
};