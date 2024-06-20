// import passport from "passport";
// import { Strategy as JwtStrategy, ExtractJwt } from "passport-google-oauth20";
// import { Strategy as LocalStrategy } from "passport-local";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import jwt from "jsonwebtoken";
// import { AuthUtility, CryptoUtility } from "../../common/Utility";
// import { ModelUtility } from "../../common/ModelUtility";

// // Project imports

// // Passport local Strategies
// passport.use(
//   "local",
//   new LocalStrategy({ usernameField: "email" }, async function (
//     email: string,
//     password: string,
//     done:any
//   ) {
//     try {
//       const exists_user = await ModelUtility.getUser({ email: email });
//       if (exists_user) {
//         const db_password = exists_user.password;
//         const isMatch = CryptoUtility.comparePasswords(
//           db_password,
//           password,
//           exists_user.salt
//         );
//         if (isMatch) {
//           const sanitUser = AuthUtility.sanitizeUser(exists_user);
//           const token = jwt.sign(sanitUser, process.env.JWT_SECRET!);
//           const data = { token, sanitUser };
//           return done(null, data);
//         }
//       }
//       return done(null, false, {
//         message: "Incorrect username or password",
//         email: email,
//       });
//     } catch (err) {
//       return done(err);
//     }
//   })
// );

// // Passport Google authentication
// const googleOptions = {
//   clientID: process.env.GOOGLE_CLIENT_ID!,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//   callbackURL: "http://localhost:8080/auth/google/cb",
// };

// passport.use(
//   "google",
//   new GoogleStrategy(googleOptions, async (accessToken, refreshToken, profile, done) => {
//     const user = {
//       authId: profile.id,
//       email: profile.emails?.[0]?.value,
//       emailVerified: profile.emails?.[0]?.verified,
//       profile: {
//         userName: (profile.displayName ? profile.displayName.replace(/\s/g, "").toLowerCase() : '') + profile.id.substring(0, 3),
//         fname: profile.name?.givenName || '',
//         lname: profile.name?.familyName || '',
//         photo: profile.photos?.[0]?.value || '',
//         email: profile.emails?.[0]?.value || '',
//       },
//       provider: profile.provider,
//       accessToken,
//     };

//     if (user) {
//       done(null, user);
//     } else {
//       done(null, false, { message: "Problem fetching user details" });
//     }
//   })
// );

// // Passport JWT authentication
// const jwtOptions: JwtStrategyOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET!,
//   // issuer: "accounts.examplesoft.com",
//   // audience: "yoursite.net",
// };

// passport.use(
//   "jwt",
//   new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
//     try {
//       const user = await ModelUtility.getUser({ _id: jwt_payload.id });
//       if (user) return done(null, AuthUtility.sanitizeUser(user));
//       return done(null, false, {
//         message: "Invalid credentials. You are not allowed!",
//       });
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// // Serialize and Deserialize user
// passport.serializeUser((user, cb) => {
//   process.nextTick(() => {
//     cb(null, AuthUtility.sanitizeUser(user), { message: "This is serializeUser" });
//   });
// });

// passport.deserializeUser((user, cb) => {
//   process.nextTick(() => {
//     cb(null, user, { message: "This is deserializeUser" });
//   });
// });

// interface JwtStrategyOptions {
//   jwtFromRequest: any;
//   secretOrKey: string;
//   issuer?: string;
//   audience?: string;
// }
