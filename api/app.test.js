const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
req = request('http://localhost:3001/api');

describe('GET /user', function() {
    it('responds with json', function (done) {
        req
            .get('/posts')
            .expect(200, done);
    });
});