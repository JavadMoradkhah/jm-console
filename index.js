const Colors = require('./lib/colors');
const convert = require('./lib/convert');
const { Reset } = require('./lib/styles');

module.exports.colors = Colors;

module.exports.console = {
  log: (message, styles) => {
    console.log(convert(message, Reset, styles));
  },
  success: (message, styles) => {
    console.log(convert(message, Colors.Green, styles));
  },
  successBG: (message, styles) => {
    console.log(convert(message, Colors.BgGreen, styles));
  },
  info: (message, styles) => {
    console.log(convert(message, Colors.Cyan, styles));
  },
  infoBG: (message, styles) => {
    console.log(convert(message, Colors.BgCyan, styles));
  },
  warning: (message, styles) => {
    console.log(convert(message, Colors.Yellow, styles));
  },
  warningBG: (message, styles) => {
    console.log(convert(message, Colors.BgYellow, styles));
  },
  error: (message, styles) => {
    console.log(convert(message, Colors.Red, styles));
  },
  errorBG: (message, styles) => {
    console.log(convert(message, Colors.BgRed, styles));
  },
  custom: (message, color, styles) => {
    console.log(convert(message, color, styles));
  },
};
