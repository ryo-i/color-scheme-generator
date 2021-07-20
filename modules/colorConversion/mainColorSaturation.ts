const mainColorSaturation = (contrast: number, saturation: number) => {
    let resultContrast: number = 0;
    let resultSaturation: number = 0;

    if (contrast == 0) {
        resultSaturation = saturation;
    } else if (contrast < 0) {
        resultSaturation = saturation / (1 - contrast / 100);
    } else if (contrast > 0) {
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