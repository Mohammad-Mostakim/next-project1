import mongoose, { Schema, Document, Model } from "mongoose";
import crypto from "crypto";
import { UtilityFunctions } from "../../common/Utility";
import { PasswordResetTimeOutWithMinute } from "@/lib/constants";

interface Profile {
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

interface OAuthUserProps extends Document {
  profile: Profile;
  email: string;
  password: Buffer;
  passNeed: boolean;
  role: string;
  salt?: Buffer;
  authId: Buffer;
  accType: string;
  authToken?: string;
  passwordChangeAt?: Date;
  passwordResetToken?: string;
  passwordResetTokenExpires?: Date;
  createResetPasswordToken: () => Promise<string>;
}

const profileSchema: Schema = new Schema<Profile>({
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

const OAuthSchema: Schema = new Schema<OAuthUserProps>(
  {
    profile: profileSchema,
    email: {
      type: String,
      required: [true, "Email is a required field"],
      unique: true,
    },
    password: {
      type: Buffer,
      minlength: [8, "Password must have at least 8 characters"],
    },
    passNeed: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
    },
    salt: Buffer,
    authId: {
      type: Buffer,
      required: [true, "authId is a required field"],
    },
    accType: {
      type: String,
      required: [true, "Provider is a required field"],
    },
    authToken: String,
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
  },
  { timestamps: true }
);

OAuthSchema.pre<OAuthUserProps>("save", function (next) {
  if (this.isModified("password") && this.password) {
    this.passNeed = false;
  } else {
    this.passNeed = true;
  }
  next();
});

OAuthSchema.virtual("id").get(function (this: OAuthUserProps) {
  return this._id;
});

OAuthSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc: any, ret: any) {
    delete ret._id;
  },
});

OAuthSchema.methods.createResetPasswordToken = async function (
  this: OAuthUserProps
) {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpires =new Date(
    Date.now() + UtilityFunctions.convertWithMinute(PasswordResetTimeOutWithMinute)
  )
  return resetToken;
};

const OAuthUserModel: Model<OAuthUserProps> =mongoose.models.OAuthUser || mongoose.model<OAuthUserProps>(
  "OAuthUser",
  OAuthSchema
);

export  default OAuthUserModel;
