module.exports = (api) => {
  api.cache(false)

  return {
    env: {
      es: {
        plugins: [
          ['@babel/plugin-transform-modules-commonjs', { loose: true }]
        ]
      },
      esm: {
        presets: [
          ['@babel/env', { modules: false }]
        ]
      }
    }
  }
}
