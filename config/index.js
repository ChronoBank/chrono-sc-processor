/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

/**
 * Chronobank/eth-chrono-cs-processor configuration
 * @module config
 * @returns {Object} Configuration
 */

require('dotenv').config();
const path = require('path');

const config = {
  mongo: {
    accounts: {
      uri: process.env.MONGO_ACCOUNTS_URI || process.env.MONGO_URI || 'mongodb://localhost:27017/data',
      collectionPrefix: process.env.MONGO_ACCOUNTS_COLLECTION_PREFIX || process.env.MONGO_COLLECTION_PREFIX || 'eth'
    }
  },
  rabbit: {
    url: process.env.RABBIT_URI || 'amqp://localhost:5672',
    serviceName: process.env.RABBIT_SERVICE_NAME || 'app_eth'
  },
  systemRabbit: {
    url: process.env.SYSTEM_RABBIT_URI || process.env.RABBIT_URI || 'amqp://localhost:5672',
    exchange: process.env.SYSTEM_RABBIT_EXCHANGE || 'internal',
    serviceName: process.env.SYSTEM_RABBIT_SERVICE_NAME || 'system' 
  },
  checkSystem: process.env.CHECK_SYSTEM ? parseInt(process.env.CHECK_SYSTEM) : true,
  smartContracts: {
    networkId: process.env.SMART_CONTRACTS_NETWORK_ID || '4',
    path: process.env.SMART_CONTRACTS_PATH || path.join(__dirname, '../node_modules/chronobank-smart-contracts/build/contracts'),
    eventContract: process.env.SMART_CONTRACTS_EVENT_CONTRACT || 'MultiEventsHistory'
  },
  logs: {
    level: process.env.LOG_LEVEL || 'info'
  }
};

module.exports = config;
