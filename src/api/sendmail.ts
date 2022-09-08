// import sgMail from "@sendgrid/mail";
// sgMail.setApiKey(import.meta.env.VITE_SENDGRID);

// console.log('mailtrap key', import.meta.env.MAILTRAP_KEY);
export async function GET(page: any) {
	const msg = {
		to: 'test@example.com',
		from: 'test@example.com',
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>'
	};
	console.log('Form submitted');
	// const output = await sgMail.send(msg);
	return {
		body: {
			test: 'foo'
		}
	};
}
