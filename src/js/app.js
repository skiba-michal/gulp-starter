import { variableToExport } from './testImport'

window.addEventListener('load', () => {
  const body = document.querySelector('body');

  const setColor = () => {
    body.style.backgroundColor = '#fcaa03';
  }

  setColor();
  console.log(variableToExport)
});
