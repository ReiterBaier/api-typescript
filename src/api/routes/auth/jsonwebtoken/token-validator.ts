import * as jwt from 'jsonwebtoken'

export const validateToken = (token: string): boolean => {
    let isValid: boolean = false
    try {
        jwt.verify(token, 'suportfy')
        isValid = true
    } catch (error) {
        isValid = false
    } finally {
        return isValid
    }
}