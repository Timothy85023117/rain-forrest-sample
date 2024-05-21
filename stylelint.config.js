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
  rules: {
    // "at-rule-no-unknown": null, 暫時先保留
    // 'selector-class-pattern': null, 暫時先保留
    
    // 禁止在具有較高優先级的選擇器後出現被其覆蓋的較低優先级的選擇器
    'no-descending-specificity': null,
    
    // class, id的命名可以使用a-z英文,--,__
    "selector-class-pattern": "^[a-z][a-z-_]+$",
    "selector-id-pattern": "^[a-z][a-z-_]+$"
  },
};
