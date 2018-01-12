const Message = require('../controller/message')

module.exports = app => {
	app.get("/getMessage", () => {});
	app.use("*", (req, res) => {
		res.render("index");
	})
}