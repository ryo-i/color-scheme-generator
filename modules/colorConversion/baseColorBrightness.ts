const baseColorBrightness = (contrast: number, brightness: number) => {
    let baseColorBrightness: number = 0;

    if (contrast == 0) {
        baseColorBrightness = brightness;
    } else if (contrast < 0) {
        baseColorBrightness = (100 - brightness) * (-1 * (contrast / 100)) + brightness;
    } else if (contrast > 0) {
        baseColorBrightness = brightness * (1 - (contrast / 100));
    }

    return Math.round(baseColorBrightness);
}

export { baseColorBrightness };