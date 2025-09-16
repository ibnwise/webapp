module.exports = class GetLogs {
  constructor(logRepository) {
    this.logRepository = logRepository;
  }

  async execute() {
    return await this.logRepository.findAll();
  }
};
