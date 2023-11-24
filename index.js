const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const { faker } = require('@faker-js/faker');
const { randomBytes } = require('crypto');
var u_name, u_name2, ip, ip2, max = 255;
for(let i=0;i<100;++i){
	u_name = faker.internet.email().toLowerCase();
	u_name2 = randomBytes(12).toString('hex');
	ip = `${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}`;
	ip2 = `${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}.${Math.floor(Math.random() * max)}`;
	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://api.telegram.org/bot6342529524:AAEfMZ3vKXdjg92DJoW0QCeBwCPdvrznR9A/sendMessage",
		"method": "POST",
		"headers": {
			"Content-Type": "application/json",
			"cache-control": "no-cache"
		},
		"data": JSON.stringify({
			"chat_id": "5500119227",
			"text": "MMMBB\n☰Ucorr: " + u_name + "\n☰clv2: " + u_name2 + "\n☰IP: " + ip +"\n" + ip2
		})
	}).done((response) => {
		console.log(response);
	});
}