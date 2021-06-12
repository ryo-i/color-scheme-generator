function rgbToHex (r: number, g: number, b: number) {
    const rgbHex: {r: string, g: string, b: string} = {
        r: String(('00' + r.toString(16)).slice(-2)),
        g: String(('00' + g.toString(16)).slice(-2)),
        b: String(('00' + b.toString(16)).slice(-2))
    };
    console.log(rgbHex);

    const hex: string = '#' + rgbHex.r + rgbHex.g + rgbHex.b;

    return hex;
}

export { rgbToHex };