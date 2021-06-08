import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';
import { hexToRgb } from '../modules/colorConversion/hexToRgb';
import { rgbToHsb } from '../modules/colorConversion/rgbToHsb';

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


  useEffect(() => {
    const rgbColors = hexToRgb(mainColor);
    console.log('R->' + rgbColors.r);
    console.log('G->' + rgbColors.g);
    console.log('B->' + rgbColors.b);
    const hsb = rgbToHsb(rgbColors.r, rgbColors.g, rgbColors.b);
    console.log(hsb);
  });


  const changeColorPicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getClassName = e.target.name;
    const getValue = e.target.value;

    if (getClassName === 'mainColor') {
      setMainColor(getValue);
    } else if (getClassName === 'accentColor') {
      setAccentColor(getValue);
    } else if (getClassName === 'baseColor') {
      setBaseColor(getValue);
    }
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
          <label><input type="color" name="mainColor" defaultValue={mainColor} onChange={changeColorPicker} />{mainColor}</label>
          <label><input type="color" name="accentColor" defaultValue={accentColor} onChange={changeColorPicker} />{accentColor}</label>
          <label><input type="color" name="baseColor" defaultValue={baseColor} onChange={changeColorPicker} />{baseColor}</label>
        </p>
      </Result>
      <Generator>
        <section className="mainColor">
          <h2>メインカラー<span>（H:{hue}, S:{saturation}, B:{brightness}）</span></h2>
          <p>色相(H)：{hue}</p>
          <input type="range" name="hue" defaultValue={hue} min="0" max="360" />
          <p>彩度(S)：{saturation}</p>
          <input type="range" name="saturation" defaultValue={saturation} min="0" max="100" />
          <p>明度(B)：{brightness} </p>
          <input type="range" name="brightness" defaultValue={brightness} min="0" max="100" />
        </section>
        <section className="accentColor">
          <h2>アクセントカラー<span>（H:123, S:123, B:123）</span></h2>
          <p>色相環：イッテン色相環</p>
          <label><input type="radio" name="hueCircle" value="hsb" />HSB</label>
          <label><input type="radio" name="hueCircle" value="munsell" />マンセル</label>
          <label><input type="radio" name="hueCircle" value="ostwald" />オストワルト</label>
          <label><input type="radio" name="hueCircle" value="pccs" />PCCS</label>
          <label><input type="radio" name="hueCircle" value="itten" defaultChecked />イッテン</label>
        </section>
        <section className="baseColor">
          <h2>ベースカラー<span>（H:123, S:123, B:123）</span></h2>
          <p>コントラスト：20%</p>
          <input type="range" name="contrast" />
        </section>
      </Generator>
    </>
  );
}

export default Inner;
