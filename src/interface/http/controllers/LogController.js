// interfaces/http/controllers/LogController.js
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

      await logger.info('Fetched all logs successfully');

      res.json(logs);
    } catch (err) {
      await logger.error(`Failed to fetch logs: ${err.message}`);
      res.status(500).json({ error: 'Failed to fetch logs' });
    }
  }
}

module.exports = LogController;