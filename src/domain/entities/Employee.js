// src/domain/entities/Employee.js
class Employee {
  constructor({ employeeId = null, name, family, phone, picture = null, salary = 0, employeeTypeId, createdAt = new Date(), updatedAt = new Date(), createdBy = null }) {
    if (!name) throw new Error('Employee requires name');
    if (!family) throw new Error('Employee requires family');
    if (!phone) throw new Error('Employee requires phone');
    if (salary < 0) throw new Error('Employee salary must be >= 0');
    if (!employeeTypeId) throw new Error('Employee requires employeeTypeId');

    this.employeeId = employeeId;
    this.name = name;
    this.family = family;
    this.phone = phone;
    this.picture = picture;
    this.salary = Number(salary);
    this.employeeTypeId = employeeTypeId;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.createdBy = createdBy;
  }
}

module.exports = Employee;