import {verify} from 'jsonwebtoken';
export const validateToken = async (event) => {
    let token = event.headers.Authorization;
    let jwtSecretKey = "16Aug98";
    console.log('--',token);
    let verification = verify(token,jwtSecretKey);
    if(verification){
        return {
            statusCode : 200,
            body: JSON.stringify({
                message:'Voila!',
                data:verification
            })
        };
    }
};