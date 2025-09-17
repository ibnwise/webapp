// src/domain/entities/Supplier.js
class Supplier {
  constructor({ partyId }) {
    if (!partyId) throw new Error('Supplier requires partyId');
    this.partyId = partyId;
  }
}
module.exports = Supplier;