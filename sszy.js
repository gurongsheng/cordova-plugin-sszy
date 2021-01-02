webserver.onRequest(
	function(request) {
		console.log("O MA GAWD! This is the request: ", request);

		webserver.sendResponse(
			request.requestId,
			{
				status: 200,
				body: '<html>Hello World</html>',
				headers: {
					'Content-Type': 'text/html'
				}
			}
		);
	}
);

webserver.start();

