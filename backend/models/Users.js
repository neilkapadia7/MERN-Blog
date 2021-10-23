const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String },
    phone: {
      type: String,
      validate: {
        validator: function (phone) {
        return /^[0-9]*$/.test(phone);
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    userType: {type: Number}, // 1 - Admin, 2 - Content Writer
    photo: {type: String},
    token: {type: String}
},{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
      next()
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;