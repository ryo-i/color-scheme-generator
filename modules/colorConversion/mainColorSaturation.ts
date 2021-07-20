const mainColorSaturation = (contrast: number, saturation: number) => {
    let mainColorSaturation: number = 0;

    const result: {
        contrast: number,
        saturation: number
    } = {
        contrast: contrast,
        saturation: saturation
    };

    if (contrast == 0) {
        mainColorSaturation = saturation;
    } else if (contrast < 0) {
        mainColorSaturation = saturation / (1 - contrast / 100);
    } else if (contrast > 0) {
        mainColorSaturation = (saturation - contrast) / (1 - contrast / 100);
    }

    result.saturation = Math.round(mainColorSaturation);
    return result;
}

export { mainColorSaturation };