const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","img/bg.gif","img/kamal.jpg","img/phone-17-64.png"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-67a27ee3.js","imports":["_app/immutable/start-67a27ee3.js","_app/immutable/chunks/index-cb480fde.js","_app/immutable/chunks/index-7eb8000d.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'endpoint',
				id: "api/send-mail",
				pattern: /^\/api\/send-mail\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/send-mail/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
