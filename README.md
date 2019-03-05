# NodejsRestChallenge

This is my first attempt to write test cases using Node.js, Mocha and Chai. Several examples are coded using Twitter's GET and Post REST APIs. It's an  interesting experience for me as the REST APIs use asynchronous processes. 

There are two test files under /test. 

test-api-async-await.js contains several GET/POST calls that demonstrates promise/async/await keywords, promise function is defined under root directory called httpMethods.js. 

While test-api-direct-callback.js demonstrates wrapping several GET/POST callback methods and handling responses directly.

I didn't upload my config.js which is placed under root due to security reasons. It looks like this:
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}

npm commands can be run as per package.json:
  "scripts": {
    "test-direct": "mocha ./test/test-api-direct-callback.js",
    "test-promise": "mocha ./test/test-api-async-await.js",
    "test-regex": "mocha -f "
  }
  
For example, tests in test-api-direct-callback.js can be invoked by running "npm run test-direct".
