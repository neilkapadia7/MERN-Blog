const mongoose = require('mongoose');

const favouritesSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    isApproved: {type: Boolean, default: false},
    title: {type: String},
    content: {type: String},
    publishedOn: {type: Date, default: Date.now()},
    approvedOn: {type: Date},
  },{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Favourites = mongoose.model('Favourites', favouritesSchema);

module.exports = Favourites;