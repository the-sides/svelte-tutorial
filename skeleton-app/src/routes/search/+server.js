import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/public'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // https://joyofcode.xyz/sveltekit-environment-variables
    const query = url.searchParams.get('q');
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${env.PUBLIC_READ_TOKEN}&query=${query}`;
    const res = await fetch(movieUrl).then(d => d.json());

    return json(res);
}