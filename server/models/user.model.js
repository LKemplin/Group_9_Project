const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter first name."],
    },
    lastName: {
      type: String,
      required: [true, "Please enter last name."],
    },
    email: {
      type: String,
      required: [true, "Please enter email."],
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(v);
        },
        message: "Please enter a valid email address.",
      },
    },
    password: {
      type: String,
      required: [true, "Please enter a password."],
      minlength: [8, "Password must be at least 8 characters."],
    },
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this._confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match.");
  }
  next();
});

UserSchema.pre("validate", function (next) {
  bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch((err) => {
      console.log("INSIDE ERROR BLOCK");
      console.log(err);
    });
});

module.exports = mongoose.model("User", UserSchema);
