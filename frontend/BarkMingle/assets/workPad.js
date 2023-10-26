/* 

Generating Tokens For Stream Chat App


You can generate tokens on the server by creating a Server Client and then using the Create Token method.

If generating a token to use client side, the token must include the userID claim in the token payload, 
where as server tokens do not. When using the create token method, pass the user_ID parameter to generate 
a client-side token.

// Define values.
const api_key = 'example'
const api_secret = 'example'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);


*/