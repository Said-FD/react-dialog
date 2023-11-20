import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [{
  input: './src/component/Dialog/Dialog.jsx',
  output: [
    {
      file: 'react-dialog/dist/react-dialog.cjs.js',
      format: 'cjs',
    },
    {
      file: 'react-dialog/dist/react-dialog.esm.js',
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: ['node_modules/**', 'package-lock.json'],
      presets:['@babel/preset-react'],
    }),
    external(),
    resolve(),
    commonjs(),
  ],
}];
