const mainColorBrightness = (contrast: number, brightness: number) => {
    let mainColorBrightness: number = 0;

    if (contrast == 0) {
        mainColorBrightness = brightness;
    } else if (contrast < 0) {
        mainColorBrightness = (brightness + contrast) / (1 + (contrast / 100))
    } else if (contrast > 0) {
        mainColorBrightness = brightness / (1 - (contrast / 100))
    }

    return Math.round(mainColorBrightness);
}

export { mainColorBrightness };