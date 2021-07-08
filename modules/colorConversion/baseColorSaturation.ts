const baseColorSaturation = (contrast: number, saturation: number) => {
    let baseColorSaturation: number = 0;

    if (contrast == 0) {
        baseColorSaturation = saturation;
    } else if (contrast < 0) {
        const contrastRate = contrast / 100;
        baseColorSaturation = saturation * contrastRate;
    } else if (contrast > 0) {
        const saturationDiff = 100 - saturation;
        const increase = contrast - 100;
        const increaseRate = increase / 100;
        const increaseSaturation = saturationDiff * increaseRate;
        baseColorSaturation = increaseSaturation + saturation;
    }

    return Math.round(baseColorSaturation);
}

export { baseColorSaturation };