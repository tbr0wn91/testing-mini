import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const checkIfNine = (num) => {
  if(num === 9){
    return 9
  }
  else{
    return 'not nine'
  }
}

describe('checkifNine tests', () => {
  it('should return the number 9', () => {
    expect(checkIfNine(9)).toEqual(9)
  })
})





// * Numbers:
//     * .toBeGreaterThan()
//     * .toBeGreaterThanOrEqual()
//     * .toBeLessThan()
//     * .toBeLessThanOrEqual()
// * Others:
//     * .not
//     * .toBeNull()
//     * .toBeUndefined()
//     * .toBeDefined()
//     * .toBeTruthy()
//     * .toBeFalsy()