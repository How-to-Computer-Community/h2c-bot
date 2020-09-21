import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
    external: [ 'discord.js/Client' ],
    input: 'index.js',
    output: {
        file: "build.js",
        format: "cjs"
    },
    plugins: [nodeResolve(), commonjs(), nodePolyfills()]
};