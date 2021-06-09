function hsbToRgb (h: number, s: number, b: number) {
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;

    const max: number = b;
    const min: number = Math.round(max - ((s / 255) * max));
    console.log('max->' + max);
    console.log('min->' + min);

    if (h >= 0 && h <= 60) {
        console.log('Hが0-60だよー');
        red = max;
        green = (h / 60) * (max - min) + min;
        blue = min;
    } else {
        console.log('Hが0-60じゃないよー');
    }

    const rgb: {r: number, g: number, b: number} = {
        r: red,
        g: green,
        b: blue
    };

    return rgb;
}

export { hsbToRgb };