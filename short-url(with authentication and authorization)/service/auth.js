const jwt = require("jsonwebtoken");
const secretKey = "sobhindra@2005@2062";

function setUser(user) {
  try {
    return jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      secretKey
    );
  } catch (error) {
    console.error("Error creating JWT:", error);
    return null;
  }
}

function getUser(token) {
  try {
    if (!token) return null;
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return null;
  }
}

module.exports = { setUser, getUser };
