import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


const nineCheck = (num) => {
  if(num === 9){
    return 9
  } else {
    return 'not nine'
  }
}

// Test for function 1
describe('nineCheck test', () => {
  it('should return the number 9', () => {
    expect(nineCheck(10)).toEqual('not nine');
    expect(nineCheck(9)).toBeGreaterThan(8);
    expect(nineCheck(9)).toBeLessThanOrEqual(9)
  })
})

const truthCheck = (value) => {
  if(value == true){
    return true
  } else {
    return null
  }
}

describe('truthCheck test', () => {
  it('should true if value truthy', () => {
    expect(truthCheck('hello')).toBeDefined();
    expect(truthCheck(true)).toBeTruthy();
    expect(truthCheck(40)).not.toBe(false);
  })
})
