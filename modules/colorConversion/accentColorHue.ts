function accentColorHue (keyColor: number[], mainColorHue: number) {

    const keyColors: number[] = keyColor;
    const accentColorKye: number = keyColors.length /2;
    const getHue: number = keyColors[accentColorKye];
    console.log(accentColorKye);
    console.log(keyColors);
    console.log(getHue);

    for (let i = 0; i < keyColors.length; i++) {
        if (keyColors[i] > mainColorHue && keyColors[i] !== keyColors[0]) {
            const keyColor = keyColors[i-1];
            const diff = mainColorHue - keyColor;
            console.log('keyColor->' + keyColor);
            console.log('diff->' + diff);
            return　getHue;
        } else if (keyColors[i] > mainColorHue && keyColors[i] === keyColors[0]) {
            const keyColor = keyColors[keyColors.length - 1];
            const diff = (360 - keyColor) + mainColorHue;
            console.log('keyColor->' + keyColor);
            console.log('diff->' + diff);
            return　getHue;
        }
    }
}

export { accentColorHue };