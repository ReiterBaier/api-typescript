var jwt  = require("jsonwebtoken")

var payload =  {
email: "any@mail",
password: "password"
}
var token = jwt.sign(payload, 'shhhhh');
console.log(token)