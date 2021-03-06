import vuePlugin from 'rollup-plugin-vue';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

// resolve path
const resolve = (val) => path.resolve(__dirname, val);

// default rollup plugins
const defaultPlugins = [
  babel({ exclude: 'node_modules/**' }),
  vuePlugin(),
  nodeResolve({ jsnext: true, main: true }),
  commonjs({ sourceMap: false }),
  terser(),
  filesize(),
  postcss({ plugins: [] })
];

export default [
  // vue component library
  {
    input: resolve('./src/index.js'),
    output: {
      file: resolve('./lib/former.umd.js'),
      format: 'umd',
      name: 'Former'
    },
    plugins: [].concat(defaultPlugins)
  }
];
