const fs = require('fs');
const path = require('path');

const getPackageJson = function(...args) {
  const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
  if (!args.length) {
    return packageJSON;
  }
  return args.reduce((out, key) => {
    out[key] = packageJSON[key];
    return out;
  }, {});
};

module.exports = getPackageJson;
