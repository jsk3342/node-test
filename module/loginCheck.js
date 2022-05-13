const loginCheck = (req, res, next) => {
  const userLogin = true;
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "fail",
    })
  }
}

module.exports = loginCheck;