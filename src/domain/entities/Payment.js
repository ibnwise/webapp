// src/domain/entities/Payment.js
class Payment {
  constructor({ id = null, partyId, date, amount, cheque = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!partyId) throw new Error('Payment requires partyId');
    if (amount == null || amount < 0) throw new Error('Payment requires non-negative amount');
    this.id = id;
    this.partyId = partyId;
    this.date = new Date(date);
    this.amount = Number(amount);
    this.cheque = cheque;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Payment;