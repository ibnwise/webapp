// infrastructure/logging/Logger.js

const Log = require('../../domain/entities/Log');

class Logger {
  constructor(logRepository) {
    this.logRepository = logRepository;
  }

  async log(message, level = 'info') {
    const logEntry = new Log({ message, level });

    // Persist log to repository (DB, file, etc.)
    //await this.logRepository.save(logEntry);

    // Also output to console
    console.log(logEntry.format());
  }

  async error(message) {
    return this.log(message, 'error');
  }

  async warn(message) {
    return this.log(message, 'warn');
  }

  async info(message) {
    return this.log(message, 'info');
  }
}

module.exports = Logger;