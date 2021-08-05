import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { inner } from '../data/data.json';
import { hexToRgb } from '../modules/colorConversion/hexToRgb';
import { rgbToHsb } from '../modules/colorConversion/rgbToHsb';
import { hsbToRgb } from '../modules/colorConversion/hsbToRgb';
import { rgbToHex } from '../modules/colorConversion/rgbToHex';
import { hsbToHex } from '../modules/colorConversion/hsbToHex';
import { accentColorHue } from '../modules/colorConversion/accentColorHue';
import { baseColorSaturation } from '../modules/colorConversion/baseColorSaturation';
import { baseColorBrightness } from '../modules/colorConversion/baseColorBrightness';
import { mainColorSaturation } from '../modules/colorConversion/mainColorSaturation';
import { mainColorBrightness } from '../modules/colorConversion/mainColorBrightness';
import { changeConstract } from '../modules/colorConversion/changeConstract';


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
  // Color Picker Hooks
  const [mainHex, setMainHex] = useState(inner.colorPicker.mainHex);
  const [accentHex, setAccentHex] = useState(inner.colorPicker.accentHex);
  const [baseHex, setBaseHex] = useState(inner.colorPicker.baseHex);

  // Main Color Hooks
  const [mainHue, setMainHue] = useState(inner.mainColor.hue);
  const [mainSaturation, setMainSaturation] = useState(inner.mainColor.saturation);
  const [mainBrightness, setMainBrightness] = useState(inner.mainColor.brightness);

  // Accent Color Hooks
  const [accentHue, setAccentHue] = useState(inner.accentColor.hue);
  const [accentSaturation, setAccentSaturation] = useState(inner.accentColor.saturation);
  const [accentBrightness, setAccentBrightness] = useState(inner.accentColor.brightness);
  const [hueCircle, setHueCircle] = useState(inner.accentColor.hueCircle);
  const [hueCircleKey, setHueCircleKey] = useState(inner.accentColor.hueCircleKey);

  // base Color Hooks
  const [baseHue, setBaseHue] = useState(inner.baseColor.hue);
  const [baseSaturation, setBaseSaturation] = useState(inner.baseColor.saturation);
  const [baseBrightness, setBaseBrightness] = useState(inner.baseColor.brightness);
  const [contrast, setContrast] = useState(inner.baseColor.contrast);


  // Change Color Picker
  const changeColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName:string = String(e.target.name);
    const getValue: string = String(e.target.value);
    const rgb = hexToRgb(getValue);
    const hsb = rgbToHsb(rgb.r, rgb.g, rgb.b);

    if (getName === 'mainHex') {
      // Main Color
      setMainHue(hsb.h);
      setMainSaturation(hsb.s);
      setMainBrightness(hsb.b);
      setMainHex(getValue);

      // Accent Color
      const getAccentHue: number = accentColorHue(hsb.h, hueCircleKey);
      const getAccentHex: string = hsbToHex(getAccentHue, hsb.s, hsb.b);
      setAccentHue(getAccentHue);
      setAccentSaturation(hsb.s);
      setAccentBrightness(hsb.b);
      setAccentHex(getAccentHex);

      // Base Color
      const getBaseSaturation: number = baseColorSaturation(contrast, hsb.s);
      const getBaseBrightness: number = baseColorBrightness(contrast, hsb.b);
      const getBaseHex: string = hsbToHex(hsb.h, getBaseSaturation, getBaseBrightness);
      setBaseHue(hsb.h);
      setBaseSaturation(getBaseSaturation);
      setBaseBrightness(getBaseBrightness);
      setBaseHex(getBaseHex);
    } else if (getName === 'accentHex') {
      // Accent Color
      setAccentHue(hsb.h);
      setAccentSaturation(hsb.s);
      setAccentBrightness(hsb.b);
      setAccentHex(getValue);

      // Main Color
      const getMainHue: number = accentColorHue(hsb.h, hueCircleKey);
      const getMainHex: string = hsbToHex(getMainHue, hsb.s, hsb.b);
      setMainHue(getMainHue);
      setMainSaturation(hsb.s);
      setMainBrightness(hsb.b);
      setMainHex(getMainHex);

      // Base Color
      const getBaseSaturation: number = baseColorSaturation(contrast, hsb.s);
      const getBaseBrightness: number = baseColorBrightness(contrast, hsb.b);
      const getBaseHex: string = hsbToHex(getMainHue, getBaseSaturation, getBaseBrightness);
      setBaseHue(getMainHue);
      setBaseSaturation(getBaseSaturation);
      setBaseBrightness(getBaseBrightness);
      setBaseHex(getBaseHex);
    } else if (getName === 'baseHex') {
      // Base Color
      setBaseHue(hsb.h);
      setBaseSaturation(hsb.s);
      setBaseBrightness(hsb.b);
      setBaseHex(getValue);

      // Contrast
      const getConstract: number = changeConstract(contrast, hsb.s, hsb.b);
      setContrast(getConstract);

      // Main Color
      const getMainSaturation: number = mainColorSaturation(getConstract, hsb.s);
      const getMainBrightness: number = mainColorBrightness(getConstract, hsb.b);
      const getMainHex: string = hsbToHex(hsb.h, getMainSaturation, getMainBrightness);
      setMainHue(hsb.h);
      setMainSaturation(getMainSaturation);
      setMainBrightness(getMainBrightness);
      setMainHex(getMainHex);

      // Accent Color
      const getAccentHue: number = accentColorHue(hsb.h, hueCircleKey);
      const getAccentHex: string = hsbToHex(getAccentHue, getMainSaturation, getMainBrightness);
      setAccentHue(getAccentHue);
      setAccentSaturation(getMainSaturation);
      setAccentBrightness(getMainBrightness);
      setAccentHex(getAccentHex);
    }
  };


  // Change Main Color
  const changeMainColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName: string = String(e.target.name);
    const getValue: number = Number(e.target.value);
    let mainRgb: {r: number, g: number, b: number};
    let accentRgb: {r: number, g: number, b: number};
    let baseRgb: {r: number, g: number, b: number};

    if (getName === 'hue') {
      const getAccentHue: number = accentColorHue(getValue, hueCircleKey);
      setMainHue(getValue);
      setAccentHue(getAccentHue);
      setBaseHue(getValue);
      mainRgb = hsbToRgb(getValue, mainSaturation, mainBrightness);
      accentRgb = hsbToRgb(getAccentHue, accentSaturation, accentBrightness);
      baseRgb = hsbToRgb(getValue, baseSaturation, baseBrightness);
    } else if (getName === 'saturation') {
      const getBaseSaturation: number = baseColorSaturation(contrast, getValue);
      setMainSaturation(getValue);
      setAccentSaturation(getValue);
      setBaseSaturation(getBaseSaturation);
      mainRgb = hsbToRgb(mainHue, getValue, mainBrightness);
      accentRgb = hsbToRgb(accentHue, getValue, accentBrightness);
      baseRgb = hsbToRgb(baseHue, getBaseSaturation, baseBrightness);
    } else if (getName === 'brightness') {
      const getBaseBrightness: number = baseColorBrightness(contrast, getValue);
      setMainBrightness(getValue);
      setAccentBrightness(getValue);
      setBaseBrightness(getBaseBrightness);
      mainRgb = hsbToRgb(mainHue, mainSaturation, getValue);
      accentRgb = hsbToRgb(accentHue, accentSaturation, getValue);
      baseRgb = hsbToRgb(baseHue, baseSaturation, getBaseBrightness);
    }

    const getMainHex: string = rgbToHex(mainRgb.r, mainRgb.g, mainRgb.b);
    const getAccentHex: string = rgbToHex(accentRgb.r, accentRgb.g, accentRgb.b);
    const getBaseHex: string = rgbToHex(baseRgb.r, baseRgb.g, baseRgb.b);
    setMainHex(getMainHex);
    setAccentHex(getAccentHex);
    setBaseHex(getBaseHex);
  };


  // Change Accent Color
  const changeAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: string = String(e.target.value);
    const hueCircleKey: string = e.target.dataset.hueCircle;
    const mainColorHue: number = mainHue;
    const getAccentHue = accentColorHue(mainColorHue, hueCircleKey);
    const getAccentHex = hsbToHex(getAccentHue, accentSaturation, accentBrightness);
    setAccentHue(getAccentHue);
    setAccentHex(getAccentHex);
    setHueCircle(getValue);
    setHueCircleKey(hueCircleKey);
  };


  // Change Base Color
  const changeBaseColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: number = Number(e.target.value);
    const getBaseSaturation = baseColorSaturation(getValue, mainSaturation);
    const getBaseBrightness = baseColorBrightness(getValue, mainBrightness);
    const getBaseHex = hsbToHex(baseHue, getBaseSaturation, getBaseBrightness);
    setContrast(getValue);
    setBaseSaturation(getBaseSaturation);
    setBaseBrightness(getBaseBrightness);
    setBaseHex(getBaseHex);
  };


  // Change CSS
  const mainColorPalette = {
    background: mainHex
  }
  const accentColorPalette = {
    background: accentHex
  }
  const baseColorPalette = {
    background: baseHex
  }


  // JSX
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
          <label><input type="color" name="mainHex" value={mainHex} onChange={changeColorPicker} />{mainHex}</label>
          <label><input type="color" name="accentHex" value={accentHex} onChange={changeColorPicker} />{accentHex}</label>
          <label><input type="color" name="baseHex" value={baseHex} onChange={changeColorPicker} />{baseHex}</label>
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
          <label><input type="radio" name="hueCircle" value="HSB表色系" data-hue-circle="hsb" onChange={changeAccentColor} />HSB</label>
          <label><input type="radio" name="hueCircle" value="マンセル表色系" data-hue-circle="munsell" onChange={changeAccentColor} />マンセル</label>
          <label><input type="radio" name="hueCircle" value="オストワルト表色系" data-hue-circle="ostwald" onChange={changeAccentColor} />オストワルト</label>
          <label><input type="radio" name="hueCircle" value="PCCS表色系" data-hue-circle="pccs" onChange={changeAccentColor} />PCCS</label>
          <label><input type="radio" name="hueCircle" value="イッテン表色系" data-hue-circle="itten" onChange={changeAccentColor} defaultChecked />イッテン</label>
          <label><input type="radio" name="hueCircle" value="NCS表色系" data-hue-circle="ncs" onChange={changeAccentColor} />NCS</label>
        </section>
        <section className="baseColor">
          <h2>ベースカラー<span>（H:{baseHue}, S:{baseSaturation}, B:{baseBrightness}）</span></h2>
          <p>コントラスト：{contrast}%</p>
          <input type="range" name="contrast" value={contrast} min="-100" max="100" onChange={changeBaseColor} />
        </section>
      </Generator>
    </>
  );
}

export default Inner;
