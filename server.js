'use strict'

var app=require('./app.js'),
	server=app.listen(app.get('port'),function(){
		console.log('Servidor en puerto: '+app.get('port'));
	})