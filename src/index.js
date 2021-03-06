import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

/* 

Usually, the code will have more components to make the entire app modulated.
However, Codepen was requested to be used to submit the code.
Since Codepen allows only 10 files for free account unless you pay annual fee,
the following list of things are adjusted to accommodate:

- Components and helper functions were consolidated to fit into the limitation.
- Redux, Thunk, SCSS could not be used because they need more files
- README.md could not be generated (thus, these comment lines)
- Since Codepen does not allow any media only one SVG image was used
- The mock api server file generated was substituted with hard-coded data

To run the application
1) download all files into one folder
2) in command line, go into the folder, and run the following command
npm install
3) after the installation (ignore the errors on installations) run the following command
npm start

*/

/* in-line database. Delete after connecting to api*/
var img = '../static/black.png';
var img2 = '../static/black.png';
var img3 = '../static/black.png';

const items = [
  { name: 'Black Suit', shop: 'Groomshop', type: '120x600', id: 123451, images: {0: img}, reaction: {good: 3, soso: 2, bad: 5}},
  { name: 'Navy Suit', shop: 'Groomshop', type: '120x600', id: 123452, images: {0: img, 1: img2}, reaction: {good: 13, soso: 12, bad: 51}},
  { name: 'Grey Suit', shop: 'Groomshop', type: '120x600', id: 123453, images: {0: img, 1: img2, 2: img3}, reaction: {good: 30, soso: 2, bad: 50}},
  { name: 'Dark Brown', shop: 'Groomshop', type: '120x600', id: 123454, images: {0: img}, reaction: {good: 30, soso: 2, bad: 5}},
  { name: 'Pitch Black', shop: 'Groomshop', type: '120x600', id: 123455, images: {0: img, 1: ""}, reaction: {good: 3, soso: 20, bad: 5}},
  { name: 'Deeper Grey', shop: 'Groomshop', type: '120x600', id: 123456, images: {0: img}, reaction: {good: 3, soso: 2, bad: 50}},
  { name: 'Herringbon', shop: 'Groomshop', type: '120x600', id: 123457, images: {0: img, 1: "", 2: img2, 3: img3}, reaction: {good: 30, soso: 20, bad: 50}}
];

const languages = ["English", "French", "Greman", "Chinese", "Indian", "Korean"];
/* end of in-line database */

ReactDOM.render(<App items={items} languages={languages}/>, document.getElementById('root'));
registerServiceWorker();

