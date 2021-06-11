function hsbToRgb (h: number, s: number, b: number) {
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;

    const max: number = (b / 100) * 255;
    const min: number = Math.round(max - ((s / 100) * max));
    const difference: number = max - min;
    console.log('max->' + max);
    console.log('min->' + min);
    console.log('difference->' + difference);

    if (h >= 0 && h <= 60) {
        console.log('Hが0-60だよー');
        red = max;
        green = (h / 60) * (difference) + min;
        blue = min;
    } else if (h >= 60 && h <= 120) {
        console.log('Hが60-120だよー');
        red = ((120 - h) / 60) * (difference) + min;
        green = max;
        blue = min;
    } else if (h >= 120 && h <= 180) {
        console.log('Hが120-180だよー');
        red = min;
        green = max;
        blue = ((h - 120) / 60) * (difference) + min;
    } else if (h >= 180 && h <= 240) {
        console.log('Hが180-240だよー');
        red = min;
        green = ((240 - h) / 60) * (difference) + min;
        blue = max;
    } else if (h >= 240 && h <= 300) {
        console.log('Hが240-300だよー');
        red = ((h - 240) / 60) * (difference) + min;
        green = min;
        blue = max;
    } else if (h >= 300 && h <= 360) {
        console.log('Hが300-360だよー');
        red = max;
        green = min;
        blue = ((360 - h) / 60) * (difference) + min;
    }

    const rgb: {r: number, g: number, b: number} = {
        r: Math.round(red),
        g: Math.round(green),
        b: Math.round(blue)
    };

    return rgb;
}

export { hsbToRgb };