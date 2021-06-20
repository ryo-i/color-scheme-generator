function accentColorHue (keyColor: number[], mainColorHue: number) {

    const keyColors: number[] = keyColor;
    const KeyLength: number = keyColors.length;
    const keyHalfLength: number = KeyLength /2;
    const getHue: number = keyColors[keyHalfLength];
    console.log(keyHalfLength);
    console.log(keyColors);
    console.log(getHue);

    let mainColorNum: number = 0;
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
            mainColorNum = i - 1;
            mainColorKey = keyColors[mainColorNum];
            mainColorDiff = mainColorHue - mainColorKey;
            setNextMainColor(keyColors[i], mainColorKey);
            break;
        } else if (keyColors[i] > mainColorHue && keyColors[i] === keyColors[0]) {
            mainColorNum = keyColors.length - 1;
            mainColorKey = keyColors[mainColorNum];
            mainColorDiff = (360 - mainColorKey) + mainColorHue;
            setNextMainColor(keyColors[i], mainColorKey);
            break;
        }
    }

    console.log('mainColorNum->' + mainColorNum);
    console.log('mainColorKey->' + mainColorKey);
    console.log('mainColorDiff->' + mainColorDiff);
    console.log('nextMeinColorKye->' + nextMeinColorKye);
    console.log('nextMainColorDiff->' + nextMainColorDiff);


    let accentColorNum: number = mainColorNum + keyHalfLength;
    let accentColorKey: number = keyColors[accentColorNum];
    if (!accentColorKey) {
        accentColorNum = accentColorNum - KeyLength;
        accentColorKey = keyColors[accentColorNum];
    }
    console.log('accentColorNum->' + accentColorNum);
    console.log('accentColorKey->' + accentColorKey);


    let nextAccentColorKye: number = keyColors[accentColorNum + 1];
    if (!nextAccentColorKye) {
        nextAccentColorKye = keyColors[0];
    }
    console.log('nextAccentColorKye->' + nextAccentColorKye);


    let nextAccentColorDiff: number = nextAccentColorKye - accentColorKey;
    if (nextAccentColorDiff < 0) {
        nextAccentColorDiff = nextAccentColorDiff + 365;
    }
    console.log('nextAccentColorDiff->' + nextAccentColorDiff);


    let accentColorDiff: number = 0;

    return　getHue;
}

export { accentColorHue };