import * as jwt from 'jsonwebtoken'

// Not Finished yet, having issue on jwt.sign jsonwebtoken with webpack5
// same issue presist in jsonwebtoken with jwt.verify
const VerfifyToken = async request =>{
    const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuBzcSDB9t7CqrnOoeInTq4T6hjdmw4sJVldU0IGAkdfTHKoNfnGBBL11fQmK4nP+v6KkOpzV/GNALcDz8mc+g9zjiCxkVFkyvlErUd+GWau7oT3ukbVw6bho+G9gqn453Pxv9f4QZWhWjIrNlgFYXdEc0pcs1yyGciOepcFdjW2w83RZ/8RKXMuvRcSq17qBuCGmZl8jcv3XtCLcjjOOxFrPU8U8MrVb9Inm8OrzapWv12bzamW2u2OpZHq9lnGfmWA3sbvSNrkpp+lIeXp/kSb/TPML3c0G2Eig3YcuQ5/580C3rAQSB7YP5X2ud0WT8CyRBqkUe86eQwgxGe/JdwIDAQAB';
    const token = request.cookie;
    try{
        jwt.verify(token,publicKey,{algorithms:['RS256']})
    }catch(err){
        const message = 'Something went wrong'
    }
    const body = "Not Finised Yet!"
    const headers = { 
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json' };
    return new Response(body, { headers })
}
export default VerfifyToken