// src/domain/entities/UserType.js
class UserType {
  constructor({ id = null, typeName }) {
    if (!typeName) throw new Error('UserType requires typeName');
    this.id = id;
    this.typeName = typeName;
  }
}

module.exports = UserType;