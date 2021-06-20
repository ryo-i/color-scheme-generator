function accentColorHue (keyColor: number[], mainColorHue: number) {

    const keyColors: number[] = keyColor;
    const accentColorKye: number = keyColors.length /2;
    const getHue: number = keyColors[accentColorKye];
    console.log(accentColorKye);
    console.log(keyColors);
    console.log(getHue);

    let mainColorKey: number = 0;
    let mainColorDiff: number = 0;
    let nextMeinColorKye: number = 0;
    let nextMainColorDiff: number = 0;

    const setNextMainColor = (keyColor: number, mainColorKey: number) => {
        nextMeinColorKye = keyColor;
        nextMainColorDiff = nextMeinColorKye - mainColorKey;
        if (nextMainColorDiff < 0) {
            nextMainColorDiff = nextMainColorDiff + 365;
        }
    };

    for (let i = 0; i < keyColors.length; i++) {
        if (keyColors[i] > mainColorHue && keyColors[i] !== keyColors[0]) {
            mainColorKey = keyColors[i-1];
            mainColorDiff = mainColorHue - mainColorKey;
            setNextMainColor(keyColors[i], mainColorKey);
            break;
        } else if (keyColors[i] > mainColorHue && keyColors[i] === keyColors[0]) {
            mainColorKey = keyColors[keyColors.length - 1];
            mainColorDiff = (360 - mainColorKey) + mainColorHue;
            setNextMainColor(keyColors[i], mainColorKey);
            break;
        }
    }

    console.log('mainColorKey->' + mainColorKey);
    console.log('mainColorDiff->' + mainColorDiff);
    console.log('nextMeinColorKye->' + nextMeinColorKye);
    console.log('nextMainColorDiff->' + nextMainColorDiff);

    return　getHue;
}

export { accentColorHue };