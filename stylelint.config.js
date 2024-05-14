module.exports = {
  root: true,
  plugins: [],
  overrides: [
    {
      files: ["**/*.(scss|css|html|vue)"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  rules: {},
};
