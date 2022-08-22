import type { RequestHandler } from '@sveltejs/kit';

import * as SibApiV3Sdk from '@sendinblue/client';
// SibApiV3Sdk.AccountApi()
// const defaultClient = new SibApiV3Sdk.TransactionalEmailsApi;
//
// const apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey =
// 	'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';

// /** @type {import('./$types').RequestHandler} */
export function GET(data: any) {
	console.log(data.url.searchParams.get('id'));
	const result: any = {
		name: 'foo'
	};
	return new Response(JSON.stringify(result));
}

/** @type {import('./$types').Action} */
export async function POST({ request, setHeaders, url }) {
	const values = await request.json();
	console.log('values', values);

	new SibApiV3Sdk.TransactionalEmailsApi()
		.sendTransacEmail({
			sender: { email: 'kamal.develop@gmail.com', name: 'kamal' },
			subject: 'This is my default subject line',
			htmlContent:
				'<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>',
			params: {
				greeting: 'This is the default greeting',
				headline: 'This is the default headline'
			}
		})
		.then(
			function (data) {
				console.log(data);
			},
			function (error) {
				console.log('error', error);
			}
		);
	//  const username = /** @type {string} */ (values.get('username'));
	//  const password = /** @type {string} */ (values.get('password'));
	//
	//  const user = await db.findUser(username);
	//
	//  if (!user) {
	//    return {
	//      status: 403,
	//      errors: {
	//        username: 'No user with this username'
	//      }
	//    };
	//  }
	//
	//  if (user.password !== hash(password)) {
	//    return {
	//      status: 403,
	//      errors: {
	//        password: 'Incorrect password'
	//      }
	//    };
	//  }
	//
	//  setHeaders({
	//    'set-cookie': createSessionCookie(user.id)
	//  });
	//
	//  return {
	//    location: url.searchParams.get('redirectTo') ?? '/'
	//  };

	return new Response(JSON.stringify({ name: values.name }), {
		status: 200
	});
}
