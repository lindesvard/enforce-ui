module.exports = function(api) {
  api.cache(true);

  const modules = process.env.BABEL_ENV === "es6" ? false : "commonjs";

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      ["styled-components", { "useDisplayName": false, "ssr": true }]
    ]
  };
};
