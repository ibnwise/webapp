// domain/entities/Log.js

class Log {
  constructor({ id = null, message, level = 'info', timestamp = new Date() }) {
    if (!message) {
      throw new Error('Log requires a message');
    }

    this.id = id;               // Primary key (DB-assigned or in-memory)
    this.message = message;     // Log content
    this.level = level;         // e.g. 'info', 'warn', 'error'
    this.timestamp = timestamp; // When it was created
  }

  // Example domain behavior: format log for display
  format() {
    return `[${this.timestamp.toISOString()}] [${this.level.toUpperCase()}] ${this.message}`;
  }
}

module.exports = Log;