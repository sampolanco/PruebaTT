var express=require('express'),
	path= require('path'),//Concatena rutas estaticas 
	logger = require('morgan'),//inspector registro de actividad
	favicon=require('serve-favicon'),
	jade=require('jade'),
	login=require('./routes/login'), //----Rutas de routing
	map=require('./routes/map'),
	invitado=require('./routes/invitado'),
	user=require('./routes/modificarusuario'),
	puntos=require('./routes/agregarpuntos'),
	manual=require('./routes/manual'),
	about=require('./routes/about'), //---
	publicDir=path.join(__dirname, 'public'),
	viewsDir=path.join(__dirname, 'views'),
	iconoURL=path.join(publicDir,'images', 'icono.ico'),
	port=(process.env.PORT || 3000),//obtener el puerto del proceso, si no el 3000
	ipAddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
	app=express(),
	pgp = require("pg-promise")(/*options*/),//--------Conexion con DB
	bodyParser=require("body-parser"), 
	cookieParser = require('cookie-parser'),
	cookieSession = require('cookie-session');


app
	.use(bodyParser.urlencoded({ extended: true }))
	.use(bodyParser.json())
	//Configurando app
	.set('views',viewsDir) 
	.set('view engine', 'jade')
	.set('port',port)
	.set('ipAddress',ipAddress)
	//ejecutando middlewares
	.use(cookieParser())
	.use(cookieSession({secret: 'abcd1234'}))
	.use(express.static(publicDir))
	.use(favicon(iconoURL))
	.use('/',login)
	//.use('/about',about);

module.exports=app;