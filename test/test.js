let assert = require("assert");
let base_url = `http://localhost:${process.env.PORT || 5050}/`;
const fetch = require("node-fetch");
const server = require("../index.js");

describe("Get Routes", () => {
	describe("Get Index", () => {
		it("should get status 200 when get request sent to index route", (done) => {
			fetch(base_url).then((res) => {
				assert.equal(200, res.status);
				done();
			});
		});
	});
	describe("Get page 1", () => {
		it("should get status 200 when fetching /1 route", (done) => {
			fetch(base_url + 1).then((res) => {
				assert.equal(200, res.status);
				done();
			});
		});
	});

	describe("Get random page", () => {
		const num = Math.floor(Math.random() * 1000);
		it(`should get status 200 when fetching /${num} route`, (done) => {
			fetch(base_url + num).then((res) => {
				assert.equal(200, res.status);
				done();

				server.close();
			});
		});
	});
});
