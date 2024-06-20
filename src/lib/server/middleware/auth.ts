import { jwtVerify, JWTPayload } from "jose";

// Interface for user JWT payload
export interface UserJWTPayload extends JWTPayload {
  uid?: string | number;
  role?: string;
  passNeed?: boolean;
  iat?: number;
  exp?: number;
}

// Get JWT secret
export const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret || secret.length <= 0) {
    throw new Error("The environment variable JWT_SECRET_KEY is not set.");
  }
  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    const verifiedData: UserJWTPayload = verified.payload as UserJWTPayload;
    
    // Check if the token is expired
    const currentTime: number = Math.floor(Date.now() / 1000);
    if (verifiedData.exp && verifiedData.exp < currentTime) {
      throw new Error("Your token has expired. Please re-login.");
    }
    return verifiedData;
  } catch (error:any) {
    throw new Error("Error in verifying token: " + error.message);
  }
};
