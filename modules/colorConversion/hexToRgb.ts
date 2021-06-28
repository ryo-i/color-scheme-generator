const hexToRgb = (hex: string) => {
    const hexColors: {r: string, b: string, g: string} = {
        r: hex.substring(1, 3),
        g: hex.substring(3, 5),
        b: hex.substring(5)
    };

    const rgbColors: {r: number, b: number, g: number} = {
        r: parseInt(hexColors.r, 16),
        g: parseInt(hexColors.g, 16),
        b: parseInt(hexColors.b, 16)
    };

    return rgbColors;
}

export { hexToRgb };