const mainColorBrightness = (contrast: number, brightness: number) => {
    let resultContrast: number = 0;
    let resultBrightness: number = 0;

    if (contrast == 0) {
        resultBrightness = brightness;
    } else if (contrast < 0) {
        resultBrightness = (brightness - contrast) / (1 - contrast / 100);
    } else if (contrast > 0) {
        resultBrightness = brightness / (1 - contrast / 100);
    }

    const result: {
        contrast: number,
        brightness: number
    } = {
        contrast: contrast,
        brightness: Math.round(resultBrightness)
    };

    return result;
}

export { mainColorBrightness };