module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false'
  },
  server: {
    command: 'npm start',
    port: 3000
  }
};
