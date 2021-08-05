const setHue = (r: number, g: number, b: number, max: number, min: number) => {
    let hue: number = 0;
    const difference: number = max - min;

    if (difference === 0) {
        hue = 0;
    } else if (max === r) {
        const result = 60 * ((g - b) / (difference));
        hue = Math.round(result);
    } else if (max === g) {
        const result = 60 * ((b - r) / (difference)) + 120;
        hue = Math.round(result);
    } else if (max === b) {
        const result = 60 * ((r - g) / (difference)) + 240;
        hue = Math.round(result);
    }

    if (Math.sign(hue) === -1) {
        hue = hue + 360;
    }

    return  hue;
};

const setSaturation = (max: number, min: number) => {
    let saturation: number = 0;
    const difference: number = max - min;
    if (difference === 0) {
        saturation = 0;
    } else {
        saturation = Math.round((max - min) / max * 100);
    }

    return saturation;
};

const setBrightness = (max: number, min: number) => {
    const brightness: number = Math.round(max / 255 * 100);
    return brightness;
};


const rgbToHsb = (r: number, g: number, b: number) => {
    const max: number = Math.max(r, g, b);
    const min: number = Math.min(r, g, b);

    const hue: number = setHue(r, g, b, max, min);
    const saturation: number = setSaturation(max, min);
    const brightness: number = setBrightness(max, min);

    const hsb: {h: number, s: number, b: number} = {
        h: hue,
        s: saturation,
        b: brightness
    };

    return hsb;
};

export { rgbToHsb };