var supertest = require('supertest');
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);
var fs = require('fs');
var openurl = require('openurl');

const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Test Twitter API for Accounts', function() {
	it('Search tweets should return non-zero records', function() {
		var params = {
		  q: '#nodejs',
		  count: 5
		}
		T.get('search/tweets', params, function(err, data, response) {
		  if(!err){
			// Loop through the returned tweets
			for(let i = 0; i < data.statuses.length; i++){
			  // Get the tweet Id from the returned data
			  let id = { id: data.statuses[i].id };
			  console.log(id);
			}
			expect(data.statuses).to.have.lengthOf.above(0);
			
		  }

		})
	}

	);
	
	it('lists/list should return non-zero records', function() {
		var params = {
		  screen_name: 'TwitterAPI'
		}
		T.get('lists/list', params, function(err, data, response) {
			assert(!err, err);
			expect(response).to.not.be.undefined;
		  	if(!err){
				expect(data).to.have.lengthOf.above(0);
			}
		})

	});
	
	
	it('lists/create should create new list dragon2019Mar4', function() {
		var params = {
		  name: 'dragon2019Mar4',
		  mode: 'private'
		}
		T.post('lists/create', params, function(err, response) {
		  if(err){
			let status = {print: response};
			console.log(status.error);
			
			}else {
				console.log(response);
				expect(response).to.not.be.undefined;
				expect(response.name).to.equal('dragon2019Mar4');
				expect(response.mode).to.equal('private');
				expect(response.user.name).to.equal('Jess Zhang');
			}
		})

	});

	it('account/update_profile_image should update the picture', function() {
		var url = '';
		var b64content = fs.readFileSync(__dirname + '/jessfly.jpg', { encoding: 'base64' })
		var params = {
		  image: b64content,
		}
		T.post('account/update_profile_image', params, function(err, response) {


		  if(err){
			let status = {print: response};
			console.log(status.error);
			
			}else {
				expect(response).to.not.be.undefined;
				console.log(response.profile_image_url);
				url = response.profile_image_url;
				expect(response.profile_image_url).to.have.string('.jpg');
				openurl.open(url);
			}
		})

	});
});

