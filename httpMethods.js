var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

module.exports = {
	postWithPromise: function(req, params) {

		return new Promise(function(resolve, reject){
			T.post(req, params, function(err, response) {

			  if(err){
				  console.log({promise: 'return error'});
				reject(err);

				}else {
					console.log({promise: 'return response'});
					 resolve(response);
				}
		})
	})
		
		
		
	}


}
