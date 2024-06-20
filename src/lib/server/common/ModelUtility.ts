import OAuthUserModel from "../model/auth/OAuthUser";
import RegisterUserModel from "../model/auth/RegisterUser";



class ModelUtility {
    static async getUser(query: any) {
        const rej_user = await ModelUtility.findUserByQuery(query, RegisterUserModel);
        if (rej_user) {
            return rej_user;
        } else {
            return await ModelUtility.findUserByQuery(query, OAuthUserModel);
        }


    }

    static async findUserByQuery(query: any, model: any) {
        try {
            return await model.findOne(query).exec().catch((err:any) => {
                console.log(err)
              });
        } catch (error: any) {
            throw new Error("Get User Error ", error.message);
        }
    }
}

export { ModelUtility };
