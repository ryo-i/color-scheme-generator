import { hsbToRgb } from './hsbToRgb';
import { rgbToHex } from './rgbToHex';

const hsbToHex = (hue: number, saturation: number, brightness: number,) => {
    const getRgb = hsbToRgb(hue, saturation, brightness);
    const getHex = rgbToHex(getRgb.r, getRgb.g, getRgb.b);
    return getHex;
}

export { hsbToHex };