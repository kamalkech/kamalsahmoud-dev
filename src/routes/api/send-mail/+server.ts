// import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import * as Sib from 'sib-api-v3-sdk';

const key = env.SENDBLUE_KEY;
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = key;

// /** @type {import('./$types').RequestHandler} */
// export function GET(data: any) {
// 	console.log(data.url.searchParams.get('id'));
// 	const result: any = {
// 		name: 'foo'
// 	};
// 	return new Response(JSON.stringify(result));
// }

/** @type {import('./$types').Action} */
export async function POST({ request }: any) {
	const values = await request.json();

	const input = {
		from: 'maroc.develop@gmail.com',
		email: 'kamal.develop@gmail.com',
		subject: 'test sendblue',
		message: 'salam alikom'
	};

	const tranEmailApi = new Sib.TransactionalEmailsApi();

	const sender = {
		email: env.SENDBLUE_SENDER,
		name: env.SENDBLUE_NAME
	};
	console.log('sender', sender);
	const receivers = [
		{
			email: values.email
		}
	];

	tranEmailApi.sendTransacEmail({
		sender,
		to: receivers,
		subject: values.subject,
		textContent: values.message,
		htmlContent: values.message
	})
	.then(console.log)
	.catch(console.log);

	return new Response(JSON.stringify({ name: input.email }), {
		status: 200
	});
}
