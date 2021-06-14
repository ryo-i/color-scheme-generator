import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';
import { hexToRgb } from '../modules/colorConversion/hexToRgb';
import { rgbToHsb } from '../modules/colorConversion/rgbToHsb';
import { hsbToRgb } from '../modules/colorConversion/hsbToRgb';
import { rgbToHex } from '../modules/colorConversion/rgbToHex';

const innerJson = Data.inner;


// Style
const Result = styled.div`
  margin: 0 0 30px;
  .colorPalette {
    display: flex;
    width: 100%;
    margin 0 0 10px;
    div {
      height: 80px;
    }
    .mainColor {
      width: 25%;
    }
    .accentColor {
      width: 5%;
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
  const [hue, setHue] = useState(innerJson.mainColor.hue);
  const [saturation, setSaturation] = useState(innerJson.mainColor.saturation);
  const [brightness, setBrightness] = useState(innerJson.mainColor.brightness);
  const [hueCircle, setHueCircle] = useState(innerJson.accentColor.hueCircle);
  const [contrast, setContrast] = useState(innerJson.baseColor.contrast);


  useEffect(() => {
    // 最終的に何もなければuseEffect自体を削除する
  });


  const changeColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName:string = String(e.target.name);
    const getValue: string = String(e.target.value);

    if (getName === 'mainColor') {
      setMainColor(getValue);
    } else if (getName === 'accentColor') {
      setAccentColor(getValue);
    } else if (getName === 'baseColor') {
      setBaseColor(getValue);
    }

    const rgb = hexToRgb(getValue);
    const hsb = rgbToHsb(rgb.r, rgb.g, rgb.b);
    setHue(hsb.h);
    setSaturation(hsb.s);
    setBrightness(hsb.b);
  };


  const changeMainColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getName:string = String(e.target.name);
    const getValue: number = Number(e.target.value);

    let rgb: {r: number, g: number, b: number};
    if (getName === 'hue') {
      setHue(getValue);
      rgb = hsbToRgb(getValue, saturation, brightness);
    } else if (getName === 'saturation') {
      setSaturation(getValue);
      rgb = hsbToRgb(hue, getValue, brightness);
    } else if (getName === 'brightness') {
      setBrightness(getValue);
      rgb = hsbToRgb(hue, saturation, getValue);
    }
    console.log(rgb);

    const hex: string = rgbToHex(rgb.r, rgb.g, rgb.b);
    console.log(hex);
    setMainColor(hex);
  };


  const changeAccentColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: string = String(e.target.value);
    setHueCircle(getValue);
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
          <h2>メインカラー<span>（H:{hue}, S:{saturation}, B:{brightness}）</span></h2>
          <p>色相(H)：{hue}</p>
          <input type="range" name="hue" value={hue} min="0" max="360" onChange={changeMainColor} />
          <p>彩度(S)：{saturation}</p>
          <input type="range" name="saturation" value={saturation} min="0" max="100" onChange={changeMainColor} />
          <p>明度(B)：{brightness} </p>
          <input type="range" name="brightness" value={brightness} min="0" max="100" onChange={changeMainColor} />
        </section>
        <section className="accentColor">
          <h2>アクセントカラー<span>（H:123, S:123, B:123）</span></h2>
          <p>色相環：{hueCircle}</p>
          <label><input type="radio" name="hueCircle" value="HSB色相環" onChange={changeAccentColor} />HSB</label>
          <label><input type="radio" name="hueCircle" value="マンセル色相環" onChange={changeAccentColor} />マンセル</label>
          <label><input type="radio" name="hueCircle" value="オストワルト色相環" onChange={changeAccentColor} />オストワルト</label>
          <label><input type="radio" name="hueCircle" value="PCCS色相環" onChange={changeAccentColor} />PCCS</label>
          <label><input type="radio" name="hueCircle" value="イッテン色相環" onChange={changeAccentColor} defaultChecked />イッテン</label>
        </section>
        <section className="baseColor">
          <h2>ベースカラー<span>（H:123, S:123, B:123）</span></h2>
          <p>コントラスト：{contrast}%</p>
          <input type="range" name="contrast" value={contrast} min="0" max="200" step="5" onChange={changeBaseColor} />
        </section>
      </Generator>
    </>
  );
}

export default Inner;
