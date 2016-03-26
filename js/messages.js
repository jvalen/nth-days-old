const req = require.context('../lang', true, /\.json.*$/);
const exports = {};

req.keys().forEach((file) => {
  const locale = file.replace('./', '').replace('.json', '');
  exports[locale] = req(file);
});

module.exports = exports;
