const mainColorBrightness = (contrast: number, brightness: number) => {
    let mainColorBrightness: number = 0;

    if (contrast == 100) {
        mainColorBrightness = brightness;
    } else if (contrast < 100) {
        const brightnessDiff = 100 - brightness;
        const increase = 100 - contrast;
        const increaseRate = increase / 100;
        const increaseBrightness = brightnessDiff * increaseRate;
        mainColorBrightness = increaseBrightness + brightness;
    } else if (contrast > 100) {
        const increaseDiff = 200 - contrast;
        const increaseRate = increaseDiff / 100;
        mainColorBrightness = brightness * increaseRate;
    }

    return Math.round(mainColorBrightness);
}

export { mainColorBrightness };