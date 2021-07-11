const baseColorSaturation = (contrast: number, saturation: number) => {
    let baseColorSaturation: number = 0;

    if (contrast == 0) {
        baseColorSaturation = saturation;
    } else if (contrast < 0) {
        baseColorSaturation = saturation * (1 + contrast / 100)
    } else if (contrast > 0) {
        baseColorSaturation = saturation + (100 - saturation) * contrast / 100;
    }

    return Math.round(baseColorSaturation);
}

export { baseColorSaturation };