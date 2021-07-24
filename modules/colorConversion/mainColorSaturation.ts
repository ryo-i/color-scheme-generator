const mainColorSaturation = (contrast: number, saturation: number) => {
    let resultSaturation: number = 0;
    const absContrast = Math.abs(contrast);

    if (contrast == 0) {
        resultSaturation = saturation;
    } else if (contrast < 0) {
        resultSaturation = saturation / (1 - absContrast / 100);
    } else if (contrast > 0) {
        resultSaturation = (saturation - absContrast) / (1 - absContrast / 100);
    }

    return Math.round(resultSaturation);
}

export { mainColorSaturation };