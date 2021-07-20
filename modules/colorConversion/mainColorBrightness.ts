const mainColorBrightness = (contrast: number, brightness: number) => {
    let mainColorBrightness: number = 0;

    const result: {
        contrast: number,
        brightness: number
    } = {
        contrast: contrast,
        brightness: brightness
    };

    if (contrast == 0) {
        mainColorBrightness = brightness;
    } else if (contrast < 0) {
        // mainColorBrightness = (brightness + contrast) / (1 + (contrast / 100))
        mainColorBrightness = (brightness - contrast) / (1 - contrast / 100);
    } else if (contrast > 0) {
        // mainColorBrightness = brightness / (1 - (contrast / 100))
        mainColorBrightness = brightness / (1 - contrast / 100);
    }

    result.brightness = Math.round(mainColorBrightness);
    return result;
}

export { mainColorBrightness };