import _ from 'lodash';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);
