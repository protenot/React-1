export default (api) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          corejs: 3,
          targets: api.caller((caller) => caller && caller.target === 'node')
            ? { node: 'current' }
            : { chrome: '58', ie: '11' },
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  };
};
