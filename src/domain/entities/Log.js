// src/domain/entities/Log.js
class Log {
  constructor({ id = null, userId = null, actionId, tableName, recordId = null, timestamp = new Date(), details = null }) {
    if (!actionId) throw new Error('Log requires actionId');
    if (!tableName) throw new Error('Log requires tableName');

    this.id = id;
    this.userId = userId;
    this.actionId = actionId;
    this.tableName = tableName;
    this.recordId = recordId;
    this.timestamp = timestamp instanceof Date ? timestamp : new Date(timestamp);
    this.details = details;
  }

  // helper
  toDTO() {
    return {
      id: this.id,
      userId: this.userId,
      actionId: this.actionId,
      tableName: this.tableName,
      recordId: this.recordId,
      timestamp: this.timestamp.toISOString(),
      details: this.details
    };
  }
}
module.exports = Log;