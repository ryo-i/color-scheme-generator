const changeConstract = (contrast: number, saturation: number, brightness: number) => {
    const absContrast = Math.abs(contrast);
    const absSaturation = Math.abs(saturation);
    const absBrightness = Math.abs(brightness);

    return absContrast;
}

export { changeConstract };