module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: ['BASE_URL'],
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: true,
        allowUndefined: false,
        verbose: false,
      },
    ],
  ],
};
