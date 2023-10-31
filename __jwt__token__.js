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

/**
 * 1. for secure api calls
 * 2. serverside: install cookie parser and use as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call using axios withCredentials: true or (credentials: 'include'while using fetch)
 * 5. 
 * 
 * 
 */