const mainColorBrightness = (contrast: number, brightness: number) => {
    let resultContrast: number = 0;
    let resultBrightness: number = 0;
    const absContrast = Math.abs(contrast);
    const absBrightness = Math.abs(brightness);

    const changeConstract = (conditions) => {
        if (conditions) {
            resultContrast = absContrast;
        } else if (!conditions && contrast < 0) {
            resultContrast = brightness;
        } else if (!conditions && contrast > 0) {
            resultContrast = 100 - brightness;
        }
        console.log('resultContrast->' + resultContrast);
    };

    if (contrast == 0) {
        resultBrightness = brightness;
    } else if (contrast < 0) {
        const conditions = 0 <= (absBrightness - absContrast);
        changeConstract(conditions);
        resultBrightness = (brightness - contrast) / (1 - contrast / 100);
    } else if (contrast > 0) {
        const conditions = (absBrightness + absContrast) <= 100;
        changeConstract(conditions);
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