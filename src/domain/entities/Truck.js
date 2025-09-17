// src/domain/entities/Truck.js
class Truck {
  constructor({ regNumber, brandId = null, ownership = 'owned', acquisitionDate = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null, driverId = null }) {
    if (!regNumber) throw new Error('Truck requires regNumber');
    this.regNumber = regNumber;
    this.brandId = brandId;
    this.ownership = ownership; // 'owned'|'freelance'
    this.acquisitionDate = acquisitionDate ? new Date(acquisitionDate) : null;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
    this.driverId = driverId;
  }
}
module.exports = Truck;