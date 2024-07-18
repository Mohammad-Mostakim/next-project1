
import connectToDB from '@/lib/server/config/Db';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { AuthUtility, CryptoUtility } from '@/lib/server/common/Utility';
import { NextRequest, NextResponse } from 'next/server';
import { AuthorizeCookie } from '@/lib/constants';
import UserModel from '@/lib/server/model/auth';

export  async function POST(req: NextRequest) {
  await connectToDB();
  const reqBody = await req.json()
  const req_data = reqBody
  const tag="user_created"
  try {
    const exist_user = await UserModel.findOne({email:req_data.email});
    if (exist_user) {
      const err_msg = `This email is already exists, email: ${req_data.email}`;
      return NextResponse.json({ feedback: { success: false, message: err_msg,tag } },{status:500})
    }
    
    const salt:string = CryptoUtility.createToken();
    const password = req_data?.password;
    if (salt && password) {
      const hashedPassword = CryptoUtility.hashPasswordWithToken(password, salt);
      if (hashedPassword) {
        const userData = {
          ...req_data,
          password: hashedPassword,
          salt: salt,
        };
        const userSchema = AuthUtility.createRejUserSchema(userData);
        const new_user = new UserModel(userSchema);
        if (new_user) {
          const savedUser = await new_user.save();
          if (savedUser) {
            const send_user = AuthUtility.sanitizeUser(savedUser);
            const token = jwt.sign(send_user, process.env.JWT_SECRET_KEY as string,{expiresIn:AuthorizeCookie.max_age});
          const response=NextResponse.json({ feedback: { success: true, message: "Register Successfully Completed", tag },User:send_user });
            response.cookies.set(AuthorizeCookie.name, token,{httpOnly:true,secure:process.env.NODE_ENV === "production"});
            return response;
          }
        }
      }
    }
  } catch (error) {
    console.error('Error occurred during user registration:', error);
   return NextResponse.json({ feedback: { success: false, message: 'Internal Server Error',tag } },{status:500});
  }
}
