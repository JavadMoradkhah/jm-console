const Styles = require('./styles');

module.exports = (message = '', color = Styles.Reset, config = {}) => {
  let styles = color;
  styles += config.bold ? Styles.Bold : '';
  styles += config.italic ? Styles.Italic : '';
  styles += config.underscore ? Styles.Underscore : '';
  styles += config.lineThrough ? Styles.LineThrough : '';
  return `${styles}${message}${Styles.Reset}`;
};
