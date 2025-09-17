// src/domain/entities/Product.js
class Product {
  constructor({ productId = null, name, unit = 'unit', createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Product requires name');
    this.productId = productId;
    this.name = name;
    this.unit = unit;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}
module.exports = Product;