

//import { readFileSync } from 'fs'
//import pubK from "raw-loader! ./public.pem"
//import pemContent from './public.pem'


// issues
//1. filesytem fs builtin on node.js is incompatible with webpack version 5
//      fs is set to be resolve.rollback.fs=false as shown in webpack.config.js
//2. jsonwebtoken incompatible export sign verify in typescript for direct usage

//import * as fs from 'fs'
//import { readFileSync } from 'fs'
//import pubK from "raw-loader! ./public.pem"
//import pemContent from './public.pem'

import * as jwt from 'jsonwebtoken'
///import{sign,SignOptions,Algorithm} from './module/jwtmodule'

const GenJWT = async request =>{
    //const userName = request.params.username;
    const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuBzcSDB9t7CqrnOoeInTq4T6hjdmw4sJVldU0IGAkdfTHKoNfnGBBL11fQmK4nP+v6KkOpzV/GNALcDz8mc+g9zjiCxkVFkyvlErUd+GWau7oT3ukbVw6bho+G9gqn453Pxv9f4QZWhWjIrNlgFYXdEc0pcs1yyGciOepcFdjW2w83RZ/8RKXMuvRcSq17qBuCGmZl8jcv3XtCLcjjOOxFrPU8U8MrVb9Inm8OrzapWv12bzamW2u2OpZHq9lnGfmWA3sbvSNrkpp+lIeXp/kSb/TPML3c0G2Eig3YcuQ5/580C3rAQSB7YP5X2ud0WT8CyRBqkUe86eQwgxGe/JdwIDAQAB';
    const userName = 'Test';
    //const publicKey = fs.readFileSync('public.pem'); "fs incompatible with Webpack 5"
    //const publicKey = pemContent;
    var token = jwt.sign({
        sub:userName,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
        },
        publicKey,
        { algorithm: 'RS256'} );
    console.log(token)
    return new Response(publicKey,
            {headers: {
                    'set-Cookie': token,
                    'Access-Control-Allow-Origin': '*', 
                    "Content-Type": "text/plain" }})
}

export default GenJWT

//Got error when trying to import * as fs from 'fs' to read the publickey
//Issue was with Webpack5, need to set the 
//resovle :{
//     fallback:{"fs": false,
//     "process":false,
//     "stream":false,
//     "buffer":false,
//     "crypto":false,}
// }

//encounter error "process is not defined": 
// plugins: [
//     // fix "process is not defined" error:
//     // (do "npm install process" before running the build)
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//     }),
//   ]

//encounter error 'fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync is not a function' **
//encounter issue with Buffer,Crypto
//Solution as following (for buffer, crypto) add to webpack.config.js:
//plugins: [
//     // fix "Buffer is not defined" error:
//     new webpack.ProvidePlugin({
//       Buffer: [require.resolve("buffer/"), "Buffer"],
//     }),]
//or resovle :{
//     fallback:{"fs": false,
//     "process":false,
//     "stream":false,
//     "buffer":false,
//     "crypto": require.resolve("crypto-browserify"),}
// }
//
//issue with jsonwebtoken: