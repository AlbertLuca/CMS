var express = require('express');
var router = express.Router();

const sesssionChecker = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.redirect("?msg=raf")
    }
  }

  router.use(sesssionChecker);

/* GET users listing. */
router.get('/', function (req, res, next) {
  // console.log(req.session.user)
  res.send('respond with a resource');
});

module.exports = router;
