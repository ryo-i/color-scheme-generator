const mainColorSaturation = (contrast: number, saturation: number) => {
    let mainColorSaturation: number = 0;

    if (contrast == 0) {
        mainColorSaturation = saturation;
    } else if (contrast < 0) {
        mainColorSaturation = saturation / (1 + contrast / 100);
    } else if (contrast > 0) {
        mainColorSaturation = (saturation - contrast) / (1 - contrast / 100);
    }

    console.log('mainColorSaturation->' + mainColorSaturation);
    return Math.round(mainColorSaturation);
}

export { mainColorSaturation };