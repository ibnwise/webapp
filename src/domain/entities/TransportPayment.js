// src/domain/entities/TransportPayment.js
class TransportPayment {
  constructor({ id = null, date, amount, notes = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!date) throw new Error('TransportPayment requires date');
    if (amount == null || amount < 0) throw new Error('TransportPayment requires non-negative amount');
    this.id = id;
    this.date = new Date(date);
    this.amount = Number(amount);
    this.notes = notes;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = TransportPayment;