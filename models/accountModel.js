/**
 * Copyright 2017–2018, LaborX PTY
 * Licensed under the AGPL Version 3 license.
 * @author Egor Zuev <zyev.egor@gmail.com>
 */

/** @model accountModel
 *  @description account model - represents an bitcoin account
 */

const mongoose = require('mongoose'),
  config = require('../config'),
  messages = require('middleware-common-components/factories/messages/addressMessageFactory');

require('mongoose-long')(mongoose);

const Account = new mongoose.Schema({
  address: {
    type: String,
    unique: true,
    required: true,
    validate: [a=>  /^(0x)?[0-9a-fA-F]{40}$/.test(a), messages.wrongAddress]
  },
  isActive: {type: Boolean, required: true, default: true},
  balance: {type: mongoose.Schema.Types.Long, default: 0},
  created: {type: Date, required: true, default: Date.now},
  erc20token : {type: mongoose.Schema.Types.Mixed, default: {}}
});

module.exports = mongoose.model(`${config.mongo.accounts.collectionPrefix}Account`, Account);
