import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';


const innerJson = Data.inner;


// Style
const Figure = styled.figure`
  .colorPalette {
    display: flex;
    width: 100%;
    max-width: 700px;
    margin 0 auto 10px;
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
    text-align: center;
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


// Component
function Inner() {
  useEffect(() => {
    hello();
  });

  return (
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
  );
}

export default Inner;
