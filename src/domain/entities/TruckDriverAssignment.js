// src/domain/entities/TruckDriverAssignment.js
class TruckDriverAssignment {
  constructor({ id = null, truckReg, startDate, endDate, employeeId, createdBy = null }) {
    if (!truckReg) throw new Error('Assignment requires truckReg');
    if (!startDate || !endDate) throw new Error('Assignment requires startDate and endDate');
    if (!employeeId) throw new Error('Assignment requires employeeId');
    if (new Date(endDate) < new Date(startDate)) throw new Error('endDate must be >= startDate');

    this.id = id;
    this.truckReg = truckReg;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.employeeId = employeeId;
    this.createdBy = createdBy;
  }
}
module.exports = TruckDriverAssignment;