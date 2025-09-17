// src/domain/entities/Client.js
class Client {
  constructor({ partyId }) {
    if (!partyId) throw new Error('Client requires partyId');
    this.partyId = partyId;
  }
}
module.exports = Client;