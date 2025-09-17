// src/domain/entities/Delivery.js
class Delivery {
  constructor({ id = null, date, partyId, truckReg, quantity = 0, unitPrice = 0, totalAmount = 0, balance = 0, dropoffId, createdAt = new Date(), updatedAt = new Date(), createdBy = null, driverId = null }) {
    if (!date) throw new Error('Delivery requires date');
    if (!partyId) throw new Error('Delivery requires partyId');
    if (!truckReg) throw new Error('Delivery requires truckReg');
    if (quantity < 0 || unitPrice < 0 || totalAmount < 0 || balance < 0) throw new Error('Numeric fields must be >= 0');
    this.id = id;
    this.date = new Date(date);
    this.partyId = partyId;
    this.truckReg = truckReg;
    this.quantity = Number(quantity);
    this.unitPrice = Number(unitPrice);
    this.totalAmount = Number(totalAmount);
    this.balance = Number(balance);
    this.dropoffId = dropoffId;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
    this.driverId = driverId;
  }
}
module.exports = Delivery;