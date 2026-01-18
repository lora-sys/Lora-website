const _LrYHXf5aPWKUrva9JGaa = require('../unmerged_dictionary/about.json');
const _Uwk9ZNqj2u4340Hhp29n = require('../unmerged_dictionary/blog.json');
const _VDVV7QWmXZdaVMkLDTPL = require('../unmerged_dictionary/contact.json');
const _KJJV8Qk8AkL1GGEKEbfz = require('../unmerged_dictionary/footer.json');
const _OdTTsOk8k1nEeZmUpwA8 = require('../unmerged_dictionary/hero.json');
const _pZv2dLryOJtteD7rdbGZ = require('../unmerged_dictionary/navbar.json');
const _SPwJItvpoYLrR2XcZTYZ = require('../unmerged_dictionary/projects.json');
const _jkdedkRivRnin4r4PqhG = require('../unmerged_dictionary/skills.json');

const dictionaries = {
  "about": _LrYHXf5aPWKUrva9JGaa,
  "blog": _Uwk9ZNqj2u4340Hhp29n,
  "contact": _VDVV7QWmXZdaVMkLDTPL,
  "footer": _KJJV8Qk8AkL1GGEKEbfz,
  "hero": _OdTTsOk8k1nEeZmUpwA8,
  "navbar": _pZv2dLryOJtteD7rdbGZ,
  "projects": _SPwJItvpoYLrR2XcZTYZ,
  "skills": _jkdedkRivRnin4r4PqhG
};
const getUnmergedDictionaries = () => dictionaries;

module.exports.getUnmergedDictionaries = getUnmergedDictionaries;
module.exports = dictionaries;
