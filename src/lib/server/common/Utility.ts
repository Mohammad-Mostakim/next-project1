
import crypto from "crypto";
import { jwtDecode } from "jwt-decode";
import nodemailer from 'nodemailer';
class UtilityFunctions {
  // Convert with minute
  static convertWithMinute(v: number): number {
    return 1000 * 60 * v;
  }
}

class AuthUtility {
  // JWT decoder
  static JWTDecoder(token: string): any {
    return jwtDecode(token);
  }

  // Sanitizer
  static sanitizeUser(user: any): { uid: string; role: string; passNeed: boolean} {
    return { uid: user.id || user.uid, role: user.role, passNeed: user.passNeed};
  }

  // Cookie extractor
  static cookieExtractor(req: any): string | null {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies["jwt_login"];
    }
    return token;
  }

  // Mail sender
  static async sendMail({ email, requestType, subject, hashedToken, message }: { email: any; requestType: string; subject: string; hashedToken: any; message: string; }): Promise<any> {

    try {
      let transporter = nodemailer.createTransport({
        host: process.env.Mail_HOST as string,
        port: parseInt(process.env.Mail_PORT as string),
        secure: false, // true for 465, false for other ports
        service: process.env.SMPT_SERVICE as string,
        auth: {
          user: process.env.SMPT_MAIL_OWNER as string, // Gmail
          pass: process.env.SMPT_Mail_PASSWORD as string, // Password
        },
      });

      // Define email option
      const mailOptions = {
        from: process.env.SMPT_MAIL_OWNER as string, // Sender address
        to: email,
        text: message,
        subject: subject.toUpperCase(),
        html: `${message}<br><a href="${process.env.DOMAIN}/${requestType}?token=${hashedToken}&email=${email}"><button>Click here</button></a><br>
        or copy and paste the below link in your browser. <br> ${process.env.DOMAIN}/${requestType}?token=${hashedToken}&email=${email}`

      };

      const mailresponse = await transporter.sendMail
        (mailOptions);
      return mailresponse;
    } catch (error: any) {
      throw new Error(error.message);
    }
    // Create a transporter

  }

  // user create schema
  static createRejUserSchema(userCreateObject: {
    fname: string;
    lname: string;
    email: string;
    password: Buffer;
    ATC: boolean;
    salt: Buffer;
    role?: string;
  }): any {
    const userSchema = {
      profile: {
        userName: (userCreateObject.fname + userCreateObject.lname).toLowerCase(),
        fname: userCreateObject.fname,
        lname: userCreateObject.lname,
        email: userCreateObject.email,
      },
      email: userCreateObject.email,
      password: userCreateObject.password, // Assuming you already have a hashed password
      passNeed: false, // Assuming password needs to be set
      atc: userCreateObject.ATC,
      salt: userCreateObject.salt, // Use the generated salt
      role: userCreateObject.role || "user",
      accProvider: "local",
      accVerified: false,
    };
    return userSchema;
  }
}

class CryptoUtility {
  // Hash password
  static hashPasswordWithToken(password: string, salt: string): Buffer {
    // Hash the password with the salt using SHA-256 algorithm
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512");

    // Return the salt and hash concatenated together
    return hash;
  }

  // Compare passwords
  static comparePasswords(db_pass: Buffer, req_pass: string, salt: string): boolean {
    // Use PBKDF2 algorithm to derive a key from the password and salt
    const key = crypto.pbkdf2Sync(req_pass, salt, 10000, 64, "sha512");
    // Compare the derived keys using timing safe comparison
    return crypto.timingSafeEqual(db_pass, key);
  }
  // token create 
  static createToken(): string {
    const token = crypto.randomBytes(32).toString("hex")
    return token
  }
  static createHashToken(token: string): string{
    const hashToken=crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
    return hashToken
  }
}

export { UtilityFunctions, AuthUtility, CryptoUtility };
