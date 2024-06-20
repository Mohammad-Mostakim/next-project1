import mongoose, { Schema, Model, Document } from "mongoose";
import crypto from "crypto";
import { CryptoUtility, UtilityFunctions } from "@/lib/server/common/Utility";
import { PasswordResetTimeOutWithMinute } from "@/lib/constants";
import { ProfileProps, UserProps } from "./interface";

// Extend UserProps to include method definitions
interface UserMethods {
  createResetPasswordToken(): Promise<string>;
}

// Define the UserProps with methods
type UserDocument = Document & UserProps & UserMethods;

const profileSchema = new Schema<ProfileProps>({
    userName: {
      type: String,
      required: [true, "Username is a required field"],
      minlength: [3, "Username must be at least 3 characters long"]
    },
    fname: {
      type: String,
      required: [true, "First name is a required field"],
    },
    lname: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
    },
    birthday: {
      type: Date,
    },
    occupation: {
      type: String,
      default: "Visitor",
    },
    workPlace: {
      type: String,
      default: "Learn From Here",
    },
    bio: {
      type: String,
      default: "No bio",
    },
    email: {
      type: String,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    contractNumber: {
      type: Number,
    },
    website: {
      type: String,
      match: [/^https?:\/\/[^\s]+$/, "Please enter a valid URL"]
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default:"male",
    },
    country: {
      type: String,
    },
    photo: {
      type: String,
      match: [/^https?:\/\/[^\s]+$/, "Please enter a valid URL"]
    },
    address: {
      type: String,
    },
    languages: {
      type: [String],
    }
  });


const UserCreateSchema: Schema<UserDocument> = new Schema<UserDocument>(
  {
    profile: profileSchema,
    email: {
      type: String,
      required: [true, "Email is required field"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      unique: true,
    },
    password: {
      type: Buffer,
      required: [true, "Password is required field"],
      minlength: [8, "Password must have at least 8 characters"],
    },
    passNeed: {
      type: Boolean,
      default: true,
    },
    atc: {
      type: Boolean,
      required: [true, "ATC is required field"],
    },
    accProvider: {
      type: String,
      default: "local",
    },
    accVerified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ['user', 'admin'],
    },
    salt: { type: String, required: [true, "salt is required field"] },
    passwordChangeAt: Date || Number,
    passwordResetToken: String,
    passwordResetTokenExpires: Date || Number,
  },
  { timestamps: true }
);

UserCreateSchema.pre<UserDocument>("save", function (next) {
  if (this.accProvider !== "local") {
    this.passNeed = true;
  } else {
    this.passNeed = false;
  }
  next();
});

UserCreateSchema.virtual("id").get(function (this: UserDocument) {
  return this._id;
});

UserCreateSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

UserCreateSchema.pre<UserDocument>("save", function (next) {
  if (this.isModified("password") && this.password) {
    this.passNeed = false;
  } else {
    this.passNeed = true;
  }
  next();
});

UserCreateSchema.methods.createResetPasswordToken = async function (): Promise<string> {
  const resetToken = CryptoUtility.createToken();
  this.passwordResetToken =CryptoUtility.createHashToken(resetToken);
  this.passwordResetTokenExpires = new Date(
    Date.now() + UtilityFunctions.convertWithMinute(PasswordResetTimeOutWithMinute)
  );
  return resetToken;
};
// Check if the model is already registered, if not, register it.
const UserModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserCreateSchema);

export default UserModel;
