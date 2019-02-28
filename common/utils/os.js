const os = require('os');

export const ip = () => {
  const interfaces = os.networkInterfaces();
  const ips = Object.values(interfaces).reduce((x, y) => x.concat(y), []);
  for (let i = 0; i < ips.length; i += 1) {
    const details = ips[i];
    if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
      return details.address;
    }
  }
};
