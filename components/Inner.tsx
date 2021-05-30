import React, { useEffect }  from 'react';
import styled from 'styled-components';
import { hello } from '../modules/hello/hello';
import Data from '../data/data.json';


const innerJson = Data.inner;


// Style
const Figure = styled.figure`
  display: flex;
  width: 100%;
  max-width: 700px;
  margin 0 auto;
  input {
    height: 100px;
    padding: 0;
    border: none;
    background: transparent;
    :hover {
      cursor: pointer;
    }
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
`;


// Component
function Inner() {
  useEffect(() => {
    hello();
  });

  return (
    <Figure>
      <input type="color" className="mainColor" />
      <input type="color" className="accentColor" />
      <input type="color" className="baseColor" />
    </Figure>
  );
}

export default Inner;
