require('dotenv').config();

const config = {
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/data'
  },	
  rabbit: {
    url: process.env.RABBIT_URI || 'amqp://localhost:5672',
    serviceName: process.env.RABBIT_SERVICE_NAME || 'app_eth'
  },
  web3: {
    network: process.env.NETWORK || 'development',
    uri: `${/^win/.test (process.platform) ? '\\\\.\\pipe\\' : '/tmp/'}${process.env.NETWORK || 'development'}/geth.ipc`
  },
  smartContracts: {
    events: {
      ttl: parseInt(process.env.SMART_CONTRACTS_EVENTS_TTL) || false
    }
  }
};

module.exports = config;
