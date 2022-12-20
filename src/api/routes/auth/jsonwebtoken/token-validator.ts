import { isNumber } from 'class-validator'
import * as jwt from 'jsonwebtoken'

export const validateToken = (token: string): boolean => {
    let isValid: boolean
    let verify = jwt.verify(token, 'suportfy')
    if (isNumber(verify.userID)) {
        isValid = true
    } else
        isValid = false
    return isValid
}