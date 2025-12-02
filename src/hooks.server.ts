import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const host = event.request.headers.get('host');

	// Redirect non-www to www.dooform.com in production
	if (host === 'dooform.com') {
		const url = new URL(event.request.url);
		url.host = 'www.dooform.com';
		throw redirect(301, url.toString());
	}

	return resolve(event);
};
