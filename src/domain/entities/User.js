// src/domain/entities/User.js
class User {
  constructor({ userId = null, username, passwordHash, userTypeId, isActive = true, createdAt = new Date(), updatedAt = new Date(), employeeId = null }) {
    if (!username) throw new Error('User requires username');
    if (!passwordHash) throw new Error('User requires passwordHash');
    if (!userTypeId) throw new Error('User requires userTypeId');

    this.userId = userId;
    this.username = username;
    this.passwordHash = passwordHash;
    this.userTypeId = userTypeId;
    this.isActive = !!isActive;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.employeeId = employeeId;
  }
}

module.exports = User;