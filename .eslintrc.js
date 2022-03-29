module.exports = Object.assign(
  {},
  {
    extends: ['./javascript', './typescript', './cypress', './jest', './react'],
    env: {
      node: true,
      jest: true
    }
  }
);
