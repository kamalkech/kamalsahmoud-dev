// import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import * as SibApiV3Sdk from 'sib-api-v3-typescript';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: any) {
	let apiInstance: any = new SibApiV3Sdk.TransactionalEmailsApi();
	let apiKey = apiInstance.authentications['apiKey'];
	apiKey.apiKey = env.SENDBLUE_KEY;
	let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

	// get values form.
	const values = await request.json();

	sendSmtpEmail.subject = 'Contact from kamal.gg'; // values.subject;
	sendSmtpEmail.htmlContent = values.message;
	sendSmtpEmail.sender = { name: values.fullname, email: values.email };
	sendSmtpEmail.to = [{ email: env.SENDBLUE_SENDER, name: env.SENDBLUE_NAME }];
	// sendSmtpEmail.params = { parameter: 'My param value', subject: 'New Subject' };

	const result = apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data) {
			// console.log('API called successfully. Returned data: ' + JSON.stringify(data));
			return true;
		},
		function (error) {
			// console.error(error);
			return false;
		}
	);

	return new Response(JSON.stringify({ result }), {
		status: 200
	});
}
