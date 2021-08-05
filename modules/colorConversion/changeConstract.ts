const changeConstract = (contrast: number, saturation: number, brightness: number) => {
    const absContrast: number = Math.abs(contrast);
    const absSaturation: number = Math.abs(saturation);
    const absBrightness: number = Math.abs(brightness);
    let checkSaturationVal: number = 0;
    let checkBrightnessionVal: number = 0;
    let saturationFlag: boolean = false;
    let brightnessFlag: boolean = false;
    let saturationDiff: number = 0;
    let brightnessDiff: number = 0;
    let resultContrast: number = contrast;


    // Check Saturation Diff
    if (contrast < 0) {
        checkSaturationVal = absSaturation + absContrast;
        saturationFlag = (checkSaturationVal) <= 100 ? true : false;
        saturationDiff = saturationFlag ? 0 : checkSaturationVal - 100;
    } else if (contrast > 0) {
        checkSaturationVal = absSaturation - absContrast;
        saturationFlag = 0 <= (checkSaturationVal) ? true : false;
        saturationDiff = saturationFlag ? 0 : -(checkSaturationVal);
    }

    // Check Brightnession Diff
    if (contrast < 0) {
        checkBrightnessionVal = absBrightness - absContrast;
        brightnessFlag = 0 <= (checkBrightnessionVal) ? true : false;
        brightnessDiff = brightnessFlag ? 0 : -(checkBrightnessionVal);
    } else if (contrast > 0) {
        checkBrightnessionVal = absBrightness + absContrast;
        brightnessFlag = (checkBrightnessionVal) <= 100 ? true : false;
        brightnessDiff = brightnessFlag ? 0 : checkBrightnessionVal -100;
    }

    // Change Flag (Saturation or Brightness)
    if (saturationDiff > brightnessDiff && !brightnessFlag) {
        brightnessFlag = true;
    } else if (saturationDiff < brightnessDiff && !saturationFlag) {
        saturationFlag = true;
    }


    // Result Contrast
    if (saturationFlag && brightnessFlag) {
        resultContrast = absContrast;
    } else if (!saturationFlag && contrast < 0) {
        resultContrast = 100 - saturation;
    } else if (!saturationFlag && contrast > 0) {
        resultContrast = saturation;
    } else if (!brightnessFlag && contrast < 0) {
        resultContrast = brightness;
    } else if (!brightnessFlag && contrast > 0) {
        resultContrast = 100 - brightness;
    }


    // Change Contrast (Plus or Minus)
    if (contrast < 0 && resultContrast > 0) {
        resultContrast = -(resultContrast);
    }

    return resultContrast;
}

export { changeConstract };