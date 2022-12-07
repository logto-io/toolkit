import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
const configs = [
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        preserveModules: true,
      },
      {
        dir: 'lib',
        preserveModules: true,
        entryFileNames: '[name].mjs',
      },
    ],
    plugins: [typescript({ tsconfig: 'tsconfig.build.json' })],
  },
];

export default configs;
