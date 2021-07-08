const mainColorSaturation = (contrast: number, saturation: number) => {
    let mainColorSaturation: number = 0;

    if (contrast == 0) {
        mainColorSaturation = saturation;
    } else if (contrast < 0) {
        const contrastRate = contrast / 100;
        mainColorSaturation = saturation / contrastRate;
    } else if (contrast > 0) {
        const increase = contrast - 100;
        const increaseRate = increase / 100;
        mainColorSaturation = (saturation - (100 * increaseRate)) / ((-1 * increaseRate) + 1);
    }

    console.log('mainColorSaturation->' + mainColorSaturation);
    return Math.round(mainColorSaturation);
}

export { mainColorSaturation };