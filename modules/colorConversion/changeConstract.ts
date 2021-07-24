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
    console.log('check Saturation Val->', checkSaturationVal);
    console.log('saturation Flag->', saturationFlag);
    console.log('saturation Diff->', saturationDiff);


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
    console.log('check Brightnession Val->', checkBrightnessionVal);
    console.log('brightness Flag->', brightnessFlag);
    console.log('brightness Diff->', brightnessDiff);


    // Change Flag (Saturation or Brightness)
    if (saturationDiff > brightnessDiff && !brightnessFlag) {
        brightnessFlag = true;
        console.log('change brightness Flag -> true');
    } else if (saturationDiff < brightnessDiff && !saturationFlag) {
        saturationFlag = true;
        console.log('change saturation Flag -> true');
    }


    // Result Contrast
    if (saturationFlag && brightnessFlag) {
        resultContrast = absContrast;
        console.log('saturationFlag & brightnessFlag -> true');
    } else if (!saturationFlag && contrast < 0) {
        resultContrast = 100 - saturation;
        console.log('saturationFlag -> false (minus)');
    } else if (!saturationFlag && contrast > 0) {
        resultContrast = saturation;
        console.log('saturationFlag -> false (plus)');
    } else if (!brightnessFlag && contrast < 0) {
        resultContrast = brightness;
        console.log('brightnessFlag -> false (minus)');
    } else if (!brightnessFlag && contrast > 0) {
        resultContrast = 100 - brightness;
        console.log('brightnessFlag -> false (plus)');
    }


    // Change Contrast (Plus or Minus)
    if (contrast < 0 && resultContrast > 0) {
        resultContrast = -(resultContrast);
    }

    return resultContrast;
}

export { changeConstract };