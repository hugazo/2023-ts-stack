import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const mainFile = require('./package.json');

const mainEntrypoint = mainFile.main.replace(/\.js$/, '');

const bundle = (config) => ({
  ...config,
  input: 'src/index.ts',
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
    ],
    output: [
      {
        file: `${mainEntrypoint}.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${mainEntrypoint}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${mainEntrypoint}.d.ts`,
      format: 'es',
    },
  }),
];
