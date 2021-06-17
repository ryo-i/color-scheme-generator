function accentColorHue (keyColor: number[], mainColorHue: number) {

    const keyColors: number[] = keyColor;
    const accentColorKye: number = keyColors.length /2;
    const getHue: number = keyColors[accentColorKye];
    console.log(accentColorKye);
    console.log(keyColors);
    console.log(getHue);

    return getHue;
}

export { accentColorHue };