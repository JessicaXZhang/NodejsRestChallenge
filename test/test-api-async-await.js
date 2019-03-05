var supertest = require('supertest');
var Twitter = require('twitter');
var config = require('../config.js');
var fs = require('fs');
var openurl = require('openurl');

const expect = require('chai').expect;

var postWithPromise = require('../httpMethods').postWithPromise;


describe('Test Twitter API for Accounts', function() {

	// use async/await to create a new list
	it('Use async: Should create new list dragon2019Mar4', async function() {
		
		var params = {
		  name: 'dragon2019Mar4',
		  mode: 'private'
		}
	

		var result = await postWithPromise('lists/create', params);
		console.log({result_nanme:result.name});
		expect(result.name).to.equal('dragon2019Mar4');
		expect(result.mode).to.equal('private');
		expect(result.user.name).to.equal('Jess Zhang');


	});
	

	//  use async/await to update account pic
	it('Use async: Should update account pic', async function() {
		var url = '';
		var b64content = fs.readFileSync(__dirname + '/jessfly.jpg', { encoding: 'base64' })
		console.log({dirname:__dirname });
		var params = {
		  image: b64content,
		}
	
		var result = await postWithPromise('account/update_profile_image', params);
		expect(result).to.not.be.undefined;
		console.log(result.profile_image_url);
		url = result.profile_image_url;
		expect(result.profile_image_url).to.have.string('.jpg');
		openurl.open(url);


	});


})
