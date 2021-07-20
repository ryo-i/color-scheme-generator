const mainColorSaturation = (contrast: number, saturation: number) => {
    let resultContrast: number = 0;
    let resultSaturation: number = 0;
    const absContrast = Math.abs(contrast);
    const absSaturation = Math.abs(saturation);

    const changeConstract = (conditions) => {
        if (conditions) {
            resultContrast = absContrast;
        } else if (!conditions && contrast < 0) {
            resultContrast = 100 - saturation;
        } else if (!conditions && contrast > 0) {
            resultContrast = saturation;
        }
        console.log('resultContrast->' + resultContrast);
    };

    if (contrast == 0) {
        resultSaturation = saturation;
    } else if (contrast < 0) {
        const conditions = (absSaturation + absContrast) <= 100;
        changeConstract(conditions);
        resultSaturation = saturation / (1 - contrast / 100);
    } else if (contrast > 0) {
        const conditions = 0 <= (absSaturation - absContrast);
        changeConstract(conditions);
        resultSaturation = (saturation - contrast) / (1 - contrast / 100);
    }

    const result: {
        contrast: number,
        saturation: number
    } = {
        contrast: contrast,
        saturation: Math.round(resultSaturation)
    };

    return result;
}

export { mainColorSaturation };