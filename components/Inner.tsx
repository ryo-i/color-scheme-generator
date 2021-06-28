import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';
import { hexToRgb } from '../modules/colorConversion/hexToRgb';
import { rgbToHsb } from '../modules/colorConversion/rgbToHsb';
import { hsbToRgb } from '../modules/colorConversion/hsbToRgb';
import { rgbToHex } from '../modules/colorConversion/rgbToHex';
import { accentColorHue } from '../modules/colorConversion/accentColorHue';

const innerJson = Data.inner;


// Style
const Result = styled.div`
  margin: 0 0 30px;
  .colorPalette {
    display: flex;
    width: 100%;
    margin 0 0 10px;
    border: 1px #ddd solid;
    div {
      height: 80px;
    }
    .mainColor {
      width: 25%;
    }
    .accentColor {
      width: 5%;
      border-left: 1px #ddd solid;
      border-right: 1px #ddd solid;
    }
    .baseColor {
      width: 70%;
    }
  }
  .colorPicker {
    input, label {
      :hover {
        cursor: pointer;
      }
    }
    label {
      margin: 0 1em 0 0;
      display: inline-block;
    }
    input[type="color"] {
      margin: 0 0.25em 0 0;
      padding: 0;
      border: none;
      background: none;
      appearance: none;
      width: 2em;
      height: 1em;
      ::-webkit-color-swatch {
        border: #eee 1px solid;
        border-radius: 3px;
      }
      ::-webkit-color-swatch-wrapper {
        margin: 0;
        padding: 0;
        width: 2em;
        height: 1em;
        border: none;
      }
    }
  }
`;


const Generator = styled.div`
  margin: 0 0 30px;
  h2 span {
    font-size: 14px;
    font-weight: normal;
    color: #000;
  }
  p {
    margin: 0;
  }
  .colorPalette {
    border: 1px solid #eee;
  }
  input, label {
    :hover {
      cursor: pointer;
    }
  }
  input[type='color'] {
    font-size: 16px;
  }
  input[type='range'] {
    width: 100%;
  }
  label {
    margin: 0 0.5em 0 0;
    display: inline-block;
  }
`;


// Component
function Inner() {
  const [mainColor, setMainColor] = useState(innerJson.colorPicker.mainColor);
  const [accentColor, setAccentColor] = useState(innerJson.colorPicker.accentColor);
  const [baseColor, setBaseColor] = useState(innerJson.colorPicker.baseColor);
  const [mainHue, setMainHue] = useState(innerJson.mainColor.hue);
  const [mainSaturation, setMainSaturation] = useState(innerJson.mainColor.saturation);
  const [mainBrightness, setMainBrightness] = useState(innerJson.mainColor.brightness);
  const [accentHue, setAccentHue] = useState(innerJson.accentColor.hue);
  const [accentSaturation, setAccentSaturation] = useState(innerJson.accentColor.saturation);
  const [accentBrightness, setAccentBrightness] = useState(innerJson.accentColor.brightness);
  const [hueCircle, setHueCircle] = useState(innerJson.accentColor.hueCircle);
  const [hueCircleKey, setHueCircleKey] = useState(innerJson.accentColor.hueCircleKey);
  const [baseHue, setBaseHue] = useState(innerJson.baseColor.hue);
  const [baseSaturation, setBaseSaturation] = useState(innerJson.baseColor.saturation);
  const [baseBrightness, setBaseBrightness] = useState(innerJson.baseColor.brightness);
  const [contrast, setContrast] = useState(innerJson.baseColor.contrast);


  useEffect(() => {
    // ページ読み込み時の処理
  }, []);


  const checkAccentHue = (h) => {
    const keyColor: number[] = innerJson.hueCircle[hueCircleKey];
    let getHue = accentColorHue(keyColor, h);
    if (getHue > 360) {
      getHue = getHue - 360;
    }
    return getHue;
  };


  const changeColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName:string = String(e.target.name);
    const getValue: string = String(e.target.value);
    const rgb = hexToRgb(getValue);
    const hsb = rgbToHsb(rgb.r, rgb.g, rgb.b);

    if (getName === 'mainColor') {
      setMainHue(hsb.h);
      setMainSaturation(hsb.s);
      setMainBrightness(hsb.b);
      setMainColor(getValue);

      // Accent Color
      const accentHue = checkAccentHue(hsb.h);
      setAccentHue(accentHue);
      setAccentSaturation(hsb.s);
      setAccentBrightness(hsb.b);
      const accentRgb = hsbToRgb(accentHue, hsb.s, hsb.b);
      const accentHex = rgbToHex(accentRgb.r, accentRgb.g, accentRgb.b);
      setAccentColor(accentHex);

      // Base Color
      setBaseHue(hsb.h);
      setBaseSaturation(baseSaturation);
      setBaseBrightness(baseBrightness);
      const baseRgb = hsbToRgb(hsb.h, baseSaturation, baseBrightness);
      const baseHex = rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b);
      setBaseColor(baseHex);
    } else if (getName === 'accentColor') {
      setAccentHue(hsb.h);
      setAccentSaturation(hsb.s);
      setAccentBrightness(hsb.b);
      setAccentColor(getValue);

      // Main Color
      const mainHue = checkAccentHue(hsb.h);
      setMainHue(mainHue);
      setMainSaturation(hsb.s);
      setMainBrightness(hsb.b);
      const mainRgb = hsbToRgb(mainHue, hsb.s, hsb.b);
      const mainHex = rgbToHex(mainRgb.r, mainRgb.g, mainRgb.b);
      setMainColor(mainHex);

      // Base Color
      setBaseHue(mainHue);
      setBaseSaturation(baseSaturation);
      setBaseBrightness(baseBrightness);
      const baseRgb = hsbToRgb(mainHue, baseSaturation, baseBrightness);
      const baseHex = rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b);
      setBaseColor(baseHex);
    } else if (getName === 'baseColor') {
      setBaseHue(hsb.h);
      setBaseSaturation(hsb.s);
      setBaseBrightness(hsb.b);
      setBaseColor(getValue);

      // Main Color
      setMainHue(hsb.h);
      setMainSaturation(mainSaturation);
      setMainBrightness(mainBrightness);
      const mainRgb = hsbToRgb(hsb.h, mainSaturation, mainBrightness);
      const mainHex = rgbToHex(mainRgb.r, mainRgb.g, mainRgb.b);
      setMainColor(mainHex);

      // Accent Color
      const accentHue = checkAccentHue(hsb.h);
      setAccentHue(accentHue);
      setAccentSaturation(accentSaturation);
      setAccentBrightness(accentBrightness);
      const accentRgb = hsbToRgb(accentHue, accentSaturation, accentBrightness);
      const accentHex = rgbToHex(accentRgb.r, accentRgb.g, accentRgb.b);
      setAccentColor(accentHex);
    }
  };


  const changeMainColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName:string = String(e.target.name);
    const getValue: number = Number(e.target.value);

    let mainRgb: {r: number, g: number, b: number};
    let accentRgb: {r: number, g: number, b: number};

    if (getName === 'hue') {
      setMainHue(getValue);
      const accentHue = checkAccentHue(getValue);
      setAccentHue(accentHue);
      mainRgb = hsbToRgb(getValue, mainSaturation, mainBrightness);
      accentRgb = hsbToRgb(accentHue, accentSaturation, accentBrightness);
    } else if (getName === 'saturation') {
      setMainSaturation(getValue);
      setAccentSaturation(getValue);
      mainRgb = hsbToRgb(mainHue, getValue, mainBrightness);
      accentRgb = hsbToRgb(accentHue, getValue, accentBrightness);
    } else if (getName === 'brightness') {
      setMainBrightness(getValue);
      setAccentBrightness(getValue);
      mainRgb = hsbToRgb(mainHue, mainSaturation, getValue);
      accentRgb = hsbToRgb(accentHue, getValue, getValue);
    }
    console.log(mainRgb);
    const mainHex: string = rgbToHex(mainRgb.r, mainRgb.g, mainRgb.b);
    console.log(mainHex);
    setMainColor(mainHex);

    console.log(accentRgb);
    const accentHex: string = rgbToHex(accentRgb.r, accentRgb.g, accentRgb.b);
    console.log(accentHex);
    setAccentColor(accentHex);
  };


  const changeAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: string = String(e.target.value);
    const hueCircleKey: string = e.target.dataset.hueCircle;
    const keyColor: number[] = innerJson.hueCircle[hueCircleKey];
    const mainColorHue: number = mainHue;
    console.log('hueCircleKey->' + hueCircleKey);
    console.log('keyColor->' + keyColor);
    console.log('keyColorLenght->' + keyColor.length);

    const getHue = accentColorHue(keyColor, mainColorHue);
    const getRgb = hsbToRgb(getHue, accentSaturation, accentBrightness);
    const getHex = rgbToHex(getRgb.r, getRgb.g, getRgb.b);
    console.log('accentColorHue->' + getHue);
    console.log(getRgb);
    console.log(getHex);

    setAccentHue(getHue);
    setAccentColor(getHex);
    setHueCircle(getValue);
    setHueCircleKey(hueCircleKey);
  };


  const changeBaseColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: number = Number(e.target.value);
    setContrast(getValue);
  };


  // Change CSS
  const mainColorPalette = {
    background: mainColor
  }
  const accentColorPalette = {
    background: accentColor
  }
  const baseColorPalette = {
    background: baseColor
  }



  return (
    <>
      <Result>
        <div className="colorPalette">
          <div className="mainColor" style={mainColorPalette}></div>
          <div className="accentColor" style={accentColorPalette}></div>
          <div className="baseColor" style={baseColorPalette}></div>
        </div>
        <p className="colorPicker">
          カラーピッカー：
          <label><input type="color" name="mainColor" value={mainColor} onChange={changeColorPicker} />{mainColor}</label>
          <label><input type="color" name="accentColor" value={accentColor} onChange={changeColorPicker} />{accentColor}</label>
          <label><input type="color" name="baseColor" value={baseColor} onChange={changeColorPicker} />{baseColor}</label>
        </p>
      </Result>
      <Generator>
        <section className="mainColor">
          <h2>メインカラー<span>（H:{mainHue}, S:{mainSaturation}, B:{mainBrightness}）</span></h2>
          <p>色相(H)：{mainHue}</p>
          <input type="range" name="hue" value={mainHue} min="0" max="360" onChange={changeMainColor} />
          <p>彩度(S)：{mainSaturation}</p>
          <input type="range" name="saturation" value={mainSaturation} min="0" max="100" onChange={changeMainColor} />
          <p>明度(B)：{mainBrightness} </p>
          <input type="range" name="brightness" value={mainBrightness} min="0" max="100" onChange={changeMainColor} />
        </section>
        <section className="accentColor">
          <h2>アクセントカラー<span>（H:{accentHue}, S:{accentSaturation}, B:{accentBrightness}）</span></h2>
          <p>色相環：{hueCircle}</p>
          <label><input type="radio" name="hueCircle" value="HSB色相環" data-hue-circle="hsb" onChange={changeAccentColor} />HSB</label>
          <label><input type="radio" name="hueCircle" value="マンセル色相環" data-hue-circle="munsell" onChange={changeAccentColor} />マンセル</label>
          <label><input type="radio" name="hueCircle" value="オストワルト色相環" data-hue-circle="ostwald" onChange={changeAccentColor} />オストワルト</label>
          <label><input type="radio" name="hueCircle" value="PCCS色相環" data-hue-circle="pccs" onChange={changeAccentColor} />PCCS</label>
          <label><input type="radio" name="hueCircle" value="イッテン色相環" data-hue-circle="itten" onChange={changeAccentColor} defaultChecked />イッテン</label>
          <label><input type="radio" name="hueCircle" value="NCS色相環" data-hue-circle="ncs" onChange={changeAccentColor} />NCS</label>
        </section>
        <section className="baseColor">
          <h2>ベースカラー<span>（H:{baseHue}, S:{baseSaturation}, B:{baseBrightness}）</span></h2>
          <p>コントラスト：{contrast}%</p>
          <input type="range" name="contrast" value={contrast} min="0" max="200" step="5" onChange={changeBaseColor} />
        </section>
      </Generator>
    </>
  );
}

export default Inner;
