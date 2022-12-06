const axios = require('axios');

module.exports = async (_phase, { _defaultConfig }) => {
  const { data: env } = await axios.get(
    `${process.env.FIREBASE_RTD_BASE_URL}/env/${process.env.ENV_API_KEY}.json`
  );

  return {
    env: env,
    reactStrictMode: true,
    swcMinify: true
  };
};
