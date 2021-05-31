import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';


const innerJson = Data.inner;


// Style
const Figure = styled.figure`
  margin: 0 0 30px;
  .colorPalette {
    display: flex;
    width: 100%;
    margin 0 0 10px;
    div {
      height: 100px;
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
    label {
      margin: 0 1em 0 0;
      display: inline-block;
      :hover {
        cursor: pointer;
      }
    }
    input {
      margin: 0 0 0 3px;
      padding: 0;
      border: none;
      background: none;
      appearance: none;
    }
  }
`;


const Generator = styled.div`
  margin: 0 0 30px;
  dt {
    margin: 0 0 10px;
    span {
    font-weight: normal;
    color: #000;
    }
  }
  dd p {
    margin: 0;
  }
  input[type='range'] {
    width: 100%;
  }
`;

// Component
function Inner() {
  useEffect(() => {
    hello();
  });

  return (
    <>
      <Figure>
        <div className="colorPalette">
          <div className="mainColor" style={{background: "#ff0000"}}></div>
          <div className="accentColor" style={{background: "#00ff00"}}></div>
          <div className="baseColor" style={{background: "#0000ff"}}></div>
        </div>
        <figcaption className="colorPicker">
          カラーピッカー：
          <input type="color" className="mainColor" />
          <input type="color" className="accentColor" />
          <input type="color" className="baseColor" />
        </figcaption>
      </Figure>
      <Generator>
          <dt>
          メインカラー<span>（R:123, G:123, B:123, #112233）</span>
          </dt>
          <dd className="hue">
            <p>色相(H): 123</p>
            <input type="range" />
          </dd>
          <dd className="saturation">
            <p>彩度(S): 123</p>
            <input type="range" />
          </dd>
          <dd className="brightness">
            <p>明度(B): 123</p>
            <input type="range" />
          </dd>


      </Generator>
    </>
  );
}

export default Inner;
