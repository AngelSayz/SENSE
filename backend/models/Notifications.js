const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    read: { type: Boolean, default: false }
  });
  const Notification = mongoose.model('Notification', NotificationSchema);

  module.exports = Notification;