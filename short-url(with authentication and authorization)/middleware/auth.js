const { getUser } = require("../service/auth");

async function restrictToLoginUserOnly(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) return res.redirect("/login");

  // Split the authorization header to extract the token
  const token = authorizationHeader.split('Bearer ')[1];
  if (!token) return res.redirect("/login");

  const user = await getUser(token);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuthenticate(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    req.user = null;
    return next();
  }

  // Split the authorization header to extract the token
  const token = authorizationHeader.split('Bearer ')[1];
  if (!token) {
    req.user = null;
    return next();
  }

  const user = getUser(token);
  req.user = user;
  next();
}

module.exports = { restrictToLoginUserOnly, checkAuthenticate };
