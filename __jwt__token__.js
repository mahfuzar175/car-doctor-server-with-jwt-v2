/**
 * ---------------------------
 *        MAKE API SECURE
 * --------------------------
 * The person who should have
 * 
 * 
 * concept:
 * 1. assign two token for each person (access token, refresh token)
 * 2. token contains: user identification (email, role, etc.). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired
 * 4. if refresh is invalid then logout the user
 * 
 * 
 */


/**
 * 1. jwt --> json web token
 * 2. generate a token by jwt.sign
 * 3. create api set to cookie. httponly, secure, sameSite
 * 4. from client side: azios withCredentials tue
 * 5. cors setup origin and credentials: true
 * 
 * 
 */