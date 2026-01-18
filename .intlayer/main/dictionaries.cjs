const _qhg5Q4pmDxlYjDo75HLH = require('../dictionary/about.json');
const _GeYCtCkIelndlNHdzKuz = require('../dictionary/blog.json');
const _iGX5hjs6e4QyEIkBUuI5 = require('../dictionary/contact.json');
const _O9KQ0HQeTcZ1ACjvw7TU = require('../dictionary/footer.json');
const _1kGkuvW9uW0c07mxyWqF = require('../dictionary/hero.json');
const _pWuqKT42MajXp3d7mgAS = require('../dictionary/navbar.json');
const _gaKjatXG7sbNYyIJMOj7 = require('../dictionary/projects.json');
const _N80BeGxpllS3VTzklbb4 = require('../dictionary/skills.json');

const dictionaries = {
  "about": _qhg5Q4pmDxlYjDo75HLH,
  "blog": _GeYCtCkIelndlNHdzKuz,
  "contact": _iGX5hjs6e4QyEIkBUuI5,
  "footer": _O9KQ0HQeTcZ1ACjvw7TU,
  "hero": _1kGkuvW9uW0c07mxyWqF,
  "navbar": _pWuqKT42MajXp3d7mgAS,
  "projects": _gaKjatXG7sbNYyIJMOj7,
  "skills": _N80BeGxpllS3VTzklbb4
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;
