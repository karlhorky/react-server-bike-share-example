module.exports = {
	middleware: [
		'./middleware/request-to-port',
	],
	routes: require('./modules').module1.routes,
};
