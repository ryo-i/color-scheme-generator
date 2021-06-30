const baseColorBrightness = (contrast: number, brightness: number) => {
    let baseColorBrightness: number = 0;

    if (contrast == 100) {
        baseColorBrightness = brightness;
    } else if (contrast < 100) {
        const brightnessDiff = 100 - brightness;
        const increase = 100 - contrast;
        const increaseRate = increase / 100;
        const increaseBrightness = brightnessDiff * increaseRate;
        baseColorBrightness = increaseBrightness + brightness;
    } else if (contrast > 100) {
        const increaseDiff = 200 - contrast;
        const increaseRate = increaseDiff / 100;
        baseColorBrightness = brightness * increaseRate;
    }

    return Math.round(baseColorBrightness);
}

export { baseColorBrightness };