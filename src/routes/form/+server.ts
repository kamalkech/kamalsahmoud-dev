import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('./$types').Action} */    
// export async function POST({ request, setHeaders, url }) {
// 	const values = await request.formData();
// 	console.log('values', values);
// 	console.log('url', url);
// }
export async function POST({ request, response }: { request: any; response: any }) {
	// export async function POST(request: any) {
	// console.log('request', await request.json());
	// const values = await request.formData();
	// console.log('values', Object.fromEntries(values));
	console.log('Endpoint hit');

	const body = await request.json();
	console.log('body', body);
	return new Response(JSON.stringify({ name: body.name }), {
		status: 200
	});
}
