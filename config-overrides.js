module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = config.resolve || {};
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
  };
  return config;
};
