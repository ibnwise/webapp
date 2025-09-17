// src/domain/entities/Dropoff.js
class Dropoff {
  constructor({ id = null, location, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!location) throw new Error('Dropoff requires location');
    this.id = id;
    this.location = location;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Dropoff;