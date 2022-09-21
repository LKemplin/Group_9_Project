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
      unique: true,
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

UserSchema.pre("save", function (next) {
  if (this.password !== this._confirmPassword) {
    this.invalidate("confirmPassword", "Password must match!");
  }
  next();
});

UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); //before saving,
    this.password = hashedPassword;
    next();
  } catch (e) {
    console.log("ERROR in hashing", e);
  }
});

module.exports = mongoose.model("User", UserSchema);
