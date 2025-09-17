// src/domain/entities/Party.js
class Party {
  constructor({ partyId = null, name, phone = null, address = null, email = null, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Party requires name');

    this.partyId = partyId;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}

module.exports = Party;