const mainColorSaturation = (contrast: number, saturation: number) => {
    let mainColorSaturation: number = 0;

    if (contrast == 100) {
        mainColorSaturation = saturation;
    } else if (contrast < 100) {
        const contrastRate = contrast / 100;
        mainColorSaturation = saturation * contrastRate;
    } else if (contrast > 100) {
        const saturationDiff = 100 - saturation;
        const increase = contrast - 100;
        const increaseRate = increase / 100;
        const increaseSaturation = saturationDiff * increaseRate;
        mainColorSaturation = increaseSaturation + saturation;
    }

    return Math.round(mainColorSaturation);
}

export { mainColorSaturation };