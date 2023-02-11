// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

import {addition} from '../src/util/Mathmatics';

test("ADDITION TESTING", ()=>{
  expect(addition(2,9)).toEqual(6) 
})