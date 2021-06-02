import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';


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
        border-color: #eee;
        border-radius: 3px;
      }
      ::-webkit-color-swatch-wrapper {
        margin: 0;
        padding: 0;
        width: 2em;
        height: 1em;
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
  const [mainColor, setMainColor] = useState(innerJson.mainColor);
  const [accentColor, setAccentColor] = useState(innerJson.accentColor);
  const [baseColor, setBaseColor] = useState(innerJson.baseColor);


  useEffect(() => {
  });


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
          <label><input type="color" className="mainColor" defaultValue={mainColor} />{mainColor}</label>
          <label><input type="color" className="accentColor" defaultValue={accentColor} />{accentColor}</label>
          <label><input type="color" className="baseColor" defaultValue={baseColor} />{baseColor}</label>
        </p>
      </Result>
      <Generator>
        <section className="mainColor">
          <h2>メインカラー<span>（H:123, S:123, B:123）</span></h2>
          <p>色相(H)：123</p>
          <input type="range" />
          <p>彩度(S)：123</p>
          <input type="range" />
          <p>明度(B)：123</p>
          <input type="range" />
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
          <p>トーン：20%</p>
          <input type="range" />
        </section>
      </Generator>
    </>
  );
}

export default Inner;
