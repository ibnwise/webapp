// src/domain/entities/EmployeeType.js
class EmployeeType {
  constructor({ id = null, typeName }) {
    if (!typeName) throw new Error('EmployeeType requires typeName');
    this.id = id;
    this.typeName = typeName;
  }
}

module.exports = EmployeeType;