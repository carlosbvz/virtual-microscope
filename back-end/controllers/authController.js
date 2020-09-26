const { errorResponse } = require('../helpers/errorHelper');

exports.signIn = function (req, res) {
  // TODO: Add service to actually check on valid user
  const { email, password } = req.body.user;
  if (email === "admin" && password === "admin") {
    const data = {
      user: {
        name: "Generic User",
      },
    };
    res.json(data);
  } else {
    res.json(errorResponse({
          status: 401,
          message: "Credentials not valid"
      }))
  }
};
