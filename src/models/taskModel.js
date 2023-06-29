const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  }
});

const task = mongoose.model('task', taskSchema);

module.exports = task;