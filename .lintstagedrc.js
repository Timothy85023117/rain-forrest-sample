module.exports = {
  "*.{js,jsx,vue,ts,tsx}": (filenames) => {
    const ignoreEslintFiles = [".lintstagedrc.js", "stylelint.config.js"];
    const filterFiles = filenames.filter((name) =>
      ignoreEslintFiles.every(
        (ignoreFileName) => name.indexOf(ignoreFileName) === -1
      )
    );
    return filterFiles.length > 10
      ? `eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --max-warnings 0`
      : `eslint ${filterFiles.join(
          " "
        )} --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --max-warnings 0`;
  },
  "src/**/*.{scss,css,vue}": (filenames) =>
    filenames.length > 10
      ? `stylelint src/**/*.{scss,css,vue} --max-warnings 0`
      : `stylelint ${filenames.join(" ")} --max-warnings 0`,
};
