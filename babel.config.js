module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            screens: "./src/screens",
            components: "./src/components",
            _main: "./src/components/_main",
            config: "./src/config",
            navigations: "./src/navigations",
            utils: "./src/utils",
            actions: "./src/state/actions",
            constants: "./src/state/constants",
            contexts: "./src/state/contexts",
            reducers: "./src/state/reducers",
            assets: "./assets/",
          },
        },
      ],
    ],
  };
};
