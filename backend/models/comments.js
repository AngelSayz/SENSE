const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    id_post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    comment: String,
    date: { type: Date, default: Date.now }
  });
  const Comment = mongoose.model('Comment', CommentSchema);
  
module.exports = {Comment };

  