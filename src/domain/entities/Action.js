// src/domain/entities/Action.js
class Action {
  constructor({ id = null, name }) {
    if (!name) throw new Error('Action requires name');
    this.id = id;
    this.name = name;
  }
}
module.exports = Action;