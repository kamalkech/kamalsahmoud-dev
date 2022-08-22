import type { RequestHandler } from '@sveltejs/kit';

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
