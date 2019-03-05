# NodejsRestChallenge

This is my first attempt to write test cases using Node.js, Mocha and Chai. Several examples are coded using Twitter's GET and Post REST APIs. It's an  interesting experience for me as the REST APIs use asynchronous processes. 

There are two test files under /test. test-api-async-await.js contains several GET/POST calls that demonstrates promise/async/await keywords. While test-api-direct-callback.js demonstrates wrapping several GET/POST callback methods and handling responses directly.

npm commands can be run as per package.json:
  "scripts": {
    "test-direct": "mocha ./test/test-api-direct-callback.js",
    "test-promise": "mocha ./test/test-api-async-await.js",
    "test-regex": "mocha -f "
  }
  
For example, tests in test-api-direct-callback.js can be invoked by running "npm run test-direct".
