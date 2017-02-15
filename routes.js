module.exports = {
	middleware: [
		'./middleware/request-to-port',
	],
	routes: require('react-server-bike-share-example-module').routes,
};
