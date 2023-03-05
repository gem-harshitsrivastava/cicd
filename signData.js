import {sign} from 'jsonwebtoken';
export const signData = async (event) => {
    let jwtSecretKey = "16Aug98";
    let data = {
        user : "Harshit",
        age  : "24"
    };
    let token = sign(data,jwtSecretKey);
    if(token){
        return {
            statusCode: 200,
            body: JSON.stringify({
                message:'Voila!',
                token : token
            })
        };
    }
};