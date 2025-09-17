// src/infrastructure/logging/Logger.js
const Log = require('../../domain/entities/Log');
const ActionsRepository = require('../repositories/ActionsRepository');

class Logger {
  constructor(logRepository, options = {}) {
    this.logRepository = logRepository;
    this.actionsRepo = new ActionsRepository();
    // options could include defaultUserId etc.
    this.defaultUserId = options.defaultUserId || null;
  }

  // meta: { userId, actionId, actionName, tableName, recordId, details }
  async log(level = 'info', meta = {}) {
    const { userId = this.defaultUserId, actionId = null, actionName = null, tableName, recordId = null, details = '' } = meta;

    let resolvedActionId = actionId;
    if (!resolvedActionId && actionName) {
      const action = await this.actionsRepo.getByName(actionName);
      if (action) resolvedActionId = action.id;
      else {
        // try to create it if missing (schema had values initially but just in case)
        const created = await this.actionsRepo.ensureByName(actionName);
        resolvedActionId = created.id;
      }
    }

    if (!resolvedActionId) {
      throw new Error('Logger requires an actionId or actionName that resolves to an actionId');
    }
    if (!tableName) {
      throw new Error('Logger requires tableName in meta');
    }

    const message = `[${level.toUpperCase()}] ${details}`;
    const logEntry = new Log({
      id: null,
      userId,
      actionId: resolvedActionId,
      tableName,
      recordId,
      timestamp: new Date(),
      details: message
    });

    await this.logRepository.save(logEntry);

    // Also emit to console for app-level visibility
    if (level === 'error') console.error(logEntry.toDTO());
    else console.log(logEntry.toDTO());

    return logEntry;
  }

  async info(details, meta = {}) { return this.log('info', { ...meta, details }); }
  async error(details, meta = {}) { return this.log('error', { ...meta, details }); }
  async warn(details, meta = {}) { return this.log('warn', { ...meta, details }); }
}

module.exports = Logger;