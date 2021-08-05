const hsbToRgb = (h: number, s: number, b: number) => {
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;
    const max: number = (b / 100) * 255;
    const min: number = Math.round(max - ((s / 100) * max));
    const diff: number = max - min;

    if (h >= 0 && h <= 60) {
        red = max;
        green = (h / 60) * (diff) + min;
        blue = min;
    } else if (h >= 60 && h <= 120) {
        red = ((120 - h) / 60) * (diff) + min;
        green = max;
        blue = min;
    } else if (h >= 120 && h <= 180) {
        red = min;
        green = max;
        blue = ((h - 120) / 60) * (diff) + min;
    } else if (h >= 180 && h <= 240) {
        red = min;
        green = ((240 - h) / 60) * (diff) + min;
        blue = max;
    } else if (h >= 240 && h <= 300) {
        red = ((h - 240) / 60) * (diff) + min;
        green = min;
        blue = max;
    } else if (h >= 300 && h <= 360) {
        red = max;
        green = min;
        blue = ((360 - h) / 60) * (diff) + min;
    }

    const rgb: {r: number, g: number, b: number} = {
        r: Math.round(red),
        g: Math.round(green),
        b: Math.round(blue)
    };

    return rgb;
}

export { hsbToRgb };