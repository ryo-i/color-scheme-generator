import { inner } from '../../data/data.json';

const accentColorHue = (mainColorHue: number, hueCircleKey: string) => {
    const keyColor: number[] = inner.hueCircle[hueCircleKey];
    const KeyLength: number = keyColor.length;
    const keyHalfLength: number = KeyLength /2;
    let mainColorNum: number = 0;
    let mainColorKey: number = 0;
    let mainColorDiff: number = 0;
    let nextMeinColorKye: number = 0;
    let nextMainColorDiff: number = 0;

    const setNextMainColor = (keyColor: number, mainColorKey: number) => {
        nextMeinColorKye = keyColor;
        nextMainColorDiff = nextMeinColorKye - mainColorKey;
        if (nextMainColorDiff < 0) {
            nextMainColorDiff = nextMainColorDiff + 360;
        }
    };

    for (let i = 0; i < keyColor.length; i++) {
        if (keyColor[i] > mainColorHue && keyColor[i] !== keyColor[0]) {
            mainColorNum = i - 1;
            mainColorKey = keyColor[mainColorNum];
            mainColorDiff = mainColorHue - mainColorKey;
            setNextMainColor(keyColor[i], mainColorKey);
            break;
        } else if (keyColor[i] > mainColorHue && keyColor[i] === keyColor[0]) {
            mainColorNum = keyColor.length - 1;
            mainColorKey = keyColor[mainColorNum];
            mainColorDiff = (360 - mainColorKey) + mainColorHue;
            setNextMainColor(keyColor[i], mainColorKey);
            break;
        } else if (keyColor[i] <= mainColorHue && keyColor[i] === keyColor[keyColor.length - 1]) {
            mainColorNum = i;
            mainColorKey = keyColor[mainColorNum];
            mainColorDiff = mainColorHue - mainColorKey;
            setNextMainColor(keyColor[0], mainColorKey);
            break;
        }
    }

    let accentColorNum: number = mainColorNum + keyHalfLength;
    let accentColorKey: number = keyColor[accentColorNum];
    if (!accentColorKey) {
        accentColorNum = accentColorNum - KeyLength;
        accentColorKey = keyColor[accentColorNum];
    }

    let nextAccentColorKye: number = keyColor[accentColorNum + 1];
    if (!nextAccentColorKye) {
        nextAccentColorKye = keyColor[0];
    }

    let nextAccentColorDiff: number = nextAccentColorKye - accentColorKey;
    if (nextAccentColorDiff < 0) {
        nextAccentColorDiff = nextAccentColorDiff + 360;
    }

    const accentColorUnit: number = nextAccentColorDiff / nextMainColorDiff;
    const accentColorDiff: number = Math.round(mainColorDiff * accentColorUnit);
    let accentColorHue: number = accentColorKey + accentColorDiff;
    if (accentColorHue > 360) {
        accentColorHue = accentColorHue - 360;
    }

    return　accentColorHue;
}

export { accentColorHue };