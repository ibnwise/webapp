// src/domain/entities/Brand.js
class Brand {
  constructor({ brandId = null, name, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Brand requires name');
    this.brandId = brandId;
    this.name = name;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Brand;