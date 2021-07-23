const changeConstract = (contrast: number, saturation: number, brightness: number) => {
    const absContrast: number = Math.abs(contrast);
    const absSaturation: number = Math.abs(saturation);
    const absBrightness: number = Math.abs(brightness);
    let checkSaturationVal: number = 0;
    let checkBrightnessionVal: number = 0;
    let saturationFlag: boolean = false;
    let brightnessFlag: boolean = false;
    let resultContrast: number = contrast;

    if (contrast < 0) {
        checkSaturationVal = absSaturation + absContrast;
        saturationFlag = (checkSaturationVal) <= 100 ? true : false;
        console.log('checkSaturationVal->', checkSaturationVal);
        console.log('saturationFlag->', saturationFlag);

        checkBrightnessionVal = absBrightness - absContrast;
        brightnessFlag = 0 <= (checkBrightnessionVal) ? true : false;
        console.log('checkBrightnessionVal->', checkBrightnessionVal);
        console.log('brightnessFlag->', brightnessFlag);
    } else if (contrast > 0) {
        checkSaturationVal = absSaturation - absContrast;
        saturationFlag = 0 <= (checkSaturationVal) ? true : false;
        console.log('checkSaturationVal->', checkSaturationVal);
        console.log('saturationFlag->', saturationFlag);

        checkBrightnessionVal = absBrightness + absContrast;
        brightnessFlag = (checkBrightnessionVal) <= 100 ? true : false;
        console.log('checkBrightnessionVal->', checkBrightnessionVal);
        console.log('brightnessFlag->', brightnessFlag);
    }

    return resultContrast;
}

export { changeConstract };