const { expressjwt: jwt } = require("express-jwt");

const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload", // despues de validar el token, nos devuelve el valor del payload
  getToken: (req) => {
    console.log(req.headers)

    // ...


  }
})

module.exports = isAuthenticated
