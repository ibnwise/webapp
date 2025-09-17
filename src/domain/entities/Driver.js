// src/domain/entities/Driver.js
class Driver {
  constructor({ driverId = null, name, driverType, phone = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Driver requires name');
    if (!driverType) throw new Error('Driver requires driverType');

    this.driverId = driverId;
    this.name = name;
    this.driverType = driverType; // 'employee' or 'freelancer'
    this.phone = phone;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Driver;