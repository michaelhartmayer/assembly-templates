var express = require('express'),
	fs		= require('fs'),
	app		= express();

app.get('*', function (req, res) {
	var f = __dirname + '/http' + (req.params[0] || 'index.html');

	console.log('[http]', f);
	res.sendfile(f);
});

app.listen(8081);
console.log("Listening: 8081");