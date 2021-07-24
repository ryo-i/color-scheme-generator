const mainColorBrightness = (contrast: number, brightness: number) => {
    let resultBrightness: number = 0;
    const absContrast = Math.abs(contrast);

    if (contrast == 0) {
        resultBrightness = brightness;
    } else if (contrast < 0) {
        resultBrightness = (brightness - absContrast) / (1 - absContrast / 100);
    } else if (contrast > 0) {
        resultBrightness = brightness / (1 - absContrast / 100);
    }

    return Math.round(resultBrightness);
}

export { mainColorBrightness };