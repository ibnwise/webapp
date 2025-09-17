// src/domain/entities/Raw.js
class Raw {
  constructor({ rawId = null, name, unit = 'unit', createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Raw requires name');
    this.rawId = rawId;
    this.name = name;
    this.unit = unit;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Raw;