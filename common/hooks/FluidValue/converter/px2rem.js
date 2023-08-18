export const px2rem = (px) => {
    const calc = px / 16;
    const cleanNumber = calc.toFixed(3);
    return cleanNumber;
}