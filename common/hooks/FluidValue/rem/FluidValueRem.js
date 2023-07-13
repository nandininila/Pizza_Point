const DEFAULT_MIN_SCREEN = 20; // 320(px)
const DEFAULT_MAX_SCREEN = 75; // 1200(px)

const cleanNumber = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const remValue = (rem) => `${cleanNumber(Number(rem))}rem`;

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

export const createFluidValueRem = (
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