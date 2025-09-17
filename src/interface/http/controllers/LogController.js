// src/interface/http/controllers/LogController.js
const GetLogs = require('../../../application/usecases/GetLogs');
const LogRepository = require('../../../infrastructure/repositories/LogRepository');
const Logger = require('../../../infrastructure/logging/Logger');

class LogController {
  static async getLogs(req, res) {
    const repo = new LogRepository();
    const logger = new Logger(repo);

    try {
      const getLogs = new GetLogs(repo);
      const logs = await getLogs.execute();

      // Use actionName instead of raw id (Logger will resolve to id)
      await logger.info('Fetched all logs successfully', {
        userId: req.user?.userId ?? null,    // if you have auth middleware
        actionName: 'login',                 // or 'insert', 'update', etc. — pick correct action
        tableName: 'logs',
        recordId: null
      });

      res.json(logs.map(l => l.toDTO()));
    } catch (err) {
      // log the failure (use a safe fallback action)
      try {
        await logger.error(`Failed to fetch logs: ${err.message}`, {
          userId: req.user?.userId ?? null,
          actionName: 'update',
          tableName: 'logs',
          recordId: null
        });
      } catch (e) {
        console.error('Logger failed:', e);
      }
      res.status(500).json({ error: 'Failed to fetch logs' });
    }
  }
}

module.exports = LogController;