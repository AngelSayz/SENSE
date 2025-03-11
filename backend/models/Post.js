const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    type_of_incident: String,
    description: String,
    images: [String],
    location: Object,
    date_of_published: { type: Date, default: Date.now },
    reactions: Array,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;