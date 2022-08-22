// import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import * as Sib from 'sib-api-v3-sdk';

const key = env.SENDBLUE_KEY;
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];
apiKey.apiKey = key;

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const values = await request.json();

	const tranEmailApi = new Sib.TransactionalEmailsApi();

	const sender = {
		email: values.email
	};
	const receivers = [
		{
			email: env.SENDBLUE_SENDER,
			name: env.SENDBLUE_NAME
		}
	];

	const result = await tranEmailApi
		.sendTransacEmail({
			sender,
			to: receivers,
			subject: values.subject,
			textContent: values.message,
			htmlContent: values.message
		})
		.then(console.log)
		.catch(console.log);

	return new Response(JSON.stringify({ result }), {
		status: 200
	});
}
