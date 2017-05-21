var express = require('express'),
    router = express.Router();
	/*bodyParser=require("body-parser"),
router
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())*/

/*-----------------------------------------------------------Login*/
router.get('/', function(req, res,next) {
	if(req.session.nombre){//Si la sesion existe
      res.redirect('http://localhost:3000/map');
      next();
    }else{
      res.render('login');
    }
});
module.exports = router;