var PokeClient = require('pokemon-showdown-api').PokeClient;
// console.log(PokeClient)
var client = new PokeClient();
// By default, this is equivalent to:
// var client = new PokeClient('ws://sim.smogon.com:8000/showdown/websocket', 'https://play.pokemonshowdown.com/action.php');

let isLoggedIn = false


client.connect();
 
// // Websocket has connected.
client.on('ready', function() {
	if (!isLoggedIn){
		let username = 'testUserlluo'
		let password = 'testUserlluo'
		client.login(username, password);
	}
	else{
		console.log('I am login and READY!')
	}
	
});
 
// Successful login.
client.on('login', function(user) {
  console.log('Logged in as:', user);
  client.send('Hi everyone', '')
  

});
 
// A battle challenge from another user has been received.
client.on('challenge', function(user) {
  console.log(user, 'would like to battle!');
});
 
// Login failed.
client.on('error:login', function(err) {
  console.log('Error encountered while logging in:', err);
});

