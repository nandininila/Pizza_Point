const DEFAULT_MIN_SCREEN = 320;
const DEFAULT_MAX_SCREEN = 1200;

const HTML_FONT_SIZE = 16;


const cleanNumber = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const pxToRem = (px) => `${cleanNumber(Number(px) / HTML_FONT_SIZE)}rem`;

//
const getPreferredValue = (minSize, maxSize, minScreenSize, maxScreenSize) => {
    const vwCalc = cleanNumber(
        (100 * (maxSize - minSize)) / (maxScreenSize - minScreenSize)
    );

    const remCalc = cleanNumber(
        (minScreenSize * maxSize - maxScreenSize * minSize) /
        (minScreenSize - maxScreenSize)
    );

    return `${vwCalc}vw + ${pxToRem(remCalc)}`;
};
//

export const createFluidValuePx = (
    minSize,
    maxSize,
    minScreenSize = DEFAULT_MIN_SCREEN,
    maxScreenSize = DEFAULT_MAX_SCREEN
) => {
    return `clamp(${pxToRem(minSize)}, ${getPreferredValue(
        minSize,
        maxSize,
        minScreenSize,
        maxScreenSize
    )}, ${pxToRem(maxSize)})`;
};