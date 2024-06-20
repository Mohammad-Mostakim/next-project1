import mongoose, { Schema, Document, Model } from "mongoose";
import crypto from "crypto";
import { UtilityFunctions } from "@/lib/server/common/Utility";
import { PasswordResetTimeOutWithMinute } from "@/lib/constants";

export interface ProfileProps {
  userName: string;
  fname: string;
  lname?: string;
  status?: string;
  birthday?: any;
  occupation?: string;
  workPlace?: string;
  bio?: string;
  email: string;
  contractNumber?: number;
  website?: any;
  gender?: string;
  country?: string;
  photo?: any;
  address?: any;
  languages?: any;
}

export interface RegisterUserProps extends Document {
  profile: ProfileProps;
  email: string;
  password: Buffer;
  passNeed?: boolean;
  atc: boolean;
  role: string;
  salt: Buffer;
  passwordChangeAt?: Date;
  passwordResetToken?: string;
  passwordResetTokenExpires?: Date;
}

const profileSchema: Schema = new Schema<ProfileProps>({
  userName: {
    type: String,
    required: [true, "username is required field"],
  },
  fname: {
    type: String,
    required: [true, "Name is required field"],
  },
  lname: String,
  status: {
    type: String,
    default: "active",
  },
  birthday: Schema.Types.Mixed,
  occupation: {
    type: String,
    default: "Visitor",
  },
  workPlace: {
    type: String,
    default: "learn From Here",
  },
  bio: {
    type: String,
    default: "No bio",
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
  },
  contractNumber: Number,
  website: Schema.Types.Mixed,
  gender: String,
  country: String,
  photo: Schema.Types.Mixed,
  address: Schema.Types.Mixed,
  languages: Schema.Types.Mixed,
});

const registerUserSchema: Schema<RegisterUserProps> = new Schema<RegisterUserProps>(
  {
    profile: profileSchema,
    email: {
      type: String,
      required: [true, "Email is required field"],
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
    role: {
      type: String,
      default: "user",
      enum: ['user', 'admin']
    },
    salt: { type: Buffer, required: [true, "salt is required field"] },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
  },
  { timestamps: true }
);

registerUserSchema.pre("save", function (next) {
  if (this.isModified("password") && this.password) {
    this.passNeed = false;
  } else {
    this.passNeed = true;
  }
  next();
});

registerUserSchema.virtual("id").get(function (this: RegisterUserProps) {
  return this._id;
});

registerUserSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});


registerUserSchema.methods.createResetPasswordToken = async function (
  this: RegisterUserProps
) {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpires = new Date(
    Date.now() + UtilityFunctions.convertWithMinute(PasswordResetTimeOutWithMinute)
  );
  return resetToken;
};

// Check if the model is already registered, if not, register it.
const RegisterUserModel: Model<RegisterUserProps> =
  mongoose.models.RegisterUser ||
  mongoose.model<RegisterUserProps>("RegisterUser", registerUserSchema);

export default RegisterUserModel;
