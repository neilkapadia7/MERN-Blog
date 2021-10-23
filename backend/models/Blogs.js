const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    isApproved: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    title: {type: String},
    content: {type: String},
    publishedOn: {type: Date, default: Date.now()},
    approvedOn: {type: Date},
    deletedOn: {type: Date},
  },{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;