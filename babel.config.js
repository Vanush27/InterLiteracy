module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@api': './src/app/api',
          '@assets': './src/app/assets',
          '@assets/*': './src/app/assets/*',
          '@screens': './src/app/screens',
          '@ui-kit': './src/ui-kit',
          '@types/*': './src/app/types/*',

          '@redux': './src/redux',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@components/*': './src/components/*',
          '@navigators': './src/navigators',
          '@constants': './src/constants',
          '@ui-modules': './src/ui-modules',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
