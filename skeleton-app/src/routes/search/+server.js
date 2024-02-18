import { json } from '@sveltejs/kit';
import { SECRET_READ_TOKEN } from '$env/static/private'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    // https://joyofcode.xyz/sveltekit-environment-variables
    const query = url.searchParams.get('q');
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${SECRET_READ_TOKEN}&query=${query}`;
    const res = await fetch(movieUrl).then(d => d.json());

    return json(res);
}