import * as _jwtoken from 'jsonwebtoken'

const jwt = <any>_jwtoken;

import{
    sign as signType,
    SignOptions,
    Algorithm,
} from "jsonwebtoken"

const sign: typeof signType = jwt.default.sign

export {
  sign,
  Algorithm,
  SignOptions,
}