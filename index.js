const Colors = require('./lib/colors');
const convert = require('./lib/convert');

module.exports.colors = Colors;

module.exports.console = {
  success: (message, styles = {}) => {
    console.log(convert(message, Colors.Green, styles));
  },
  successBG: (message, styles = {}) => {
    console.log(convert(message, Colors.BgGreen, styles));
  },
  info: (message, styles = {}) => {
    console.log(convert(message, Colors.Cyan, styles));
  },
  infoBG: (message, styles = {}) => {
    console.log(convert(message, Colors.BgCyan, styles));
  },
  warning: (message, styles = {}) => {
    console.log(convert(message, Colors.Yellow, styles));
  },
  warningBG: (message, styles = {}) => {
    console.log(convert(message, Colors.BgYellow, styles));
  },
  error: (message, styles = {}) => {
    console.log(convert(message, Colors.Red, styles));
  },
  errorBG: (message, styles = {}) => {
    console.log(convert(message, Colors.BgRed, styles));
  },
  custom: (message, color = Colors.White, styles = {}) => {
    console.log(convert(message, color, styles));
  },
};
