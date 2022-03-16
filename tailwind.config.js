const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        "hyphen-purple": {
          DEFAULT: getColorInitializer("var(--hyphen-default)"),
          dark: getColorInitializer("var(--hyphen-dark)"),
          mid: getColorInitializer("var(--hyphen-mid)"),
          darker: getColorInitializer("var(--hyphen-darker)"),
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};

function getColorInitializer(color) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${color}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(${color}, var(${opacityVariable}, 1))`;
    }
    return `rgb(${color})`;
  };
}
