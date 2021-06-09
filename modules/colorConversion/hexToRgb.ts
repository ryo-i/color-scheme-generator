function hexToRgb (hex: string) {
    const hexeColors: {r: string, b: string, g: string} = {
        r: hex.substring(1, 3),
        g: hex.substring(3, 5),
        b: hex.substring(5)
    };

    const rgbColors: {r: number, b: number, g: number} = {
        r: parseInt(hexeColors.r, 16),
        g: parseInt(hexeColors.g, 16),
        b: parseInt(hexeColors.b, 16)
    };

    return rgbColors;
}

export { hexToRgb };