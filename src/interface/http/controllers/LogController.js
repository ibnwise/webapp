const GetLogs = require('../../../application/usecases/GetLogs');
const LogRepository = require('../../../infrastructure/repositories/LogRepository');

class LogController {
  static async getLogs(req, res) {
    try {
      const repo = new LogRepository();
      const getLogs = new GetLogs(repo);
      const logs = await getLogs.execute();
      res.json(logs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch logs' });
    }
  }
}

module.exports = LogController;
