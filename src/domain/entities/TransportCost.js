// src/domain/entities/TransportCost.js
class TransportCost {
  constructor({ id = null, deliveryId, rate = 0, total = 0, extraCharge = 0, discount = 0, finalTotal = null, notes = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!deliveryId) throw new Error('TransportCost requires deliveryId');
    // finalTotal must equal total + extra - discount (DB enforces it but we can compute)
    const computed = Number(total) + Number(extraCharge) - Number(discount);
    if (finalTotal != null && Number(finalTotal) !== computed) {
      throw new Error('TransportCost finalTotal must equal total + extra_charge - discount');
    }
    this.id = id;
    this.deliveryId = deliveryId;
    this.rate = Number(rate);
    this.total = Number(total);
    this.extraCharge = Number(extraCharge);
    this.discount = Number(discount);
    this.finalTotal = finalTotal == null ? computed : Number(finalTotal);
    this.notes = notes;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = TransportCost;