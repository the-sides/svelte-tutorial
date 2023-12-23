<section>
    <h1>Setting up API routes</h1>
    <p>Setting up endpoints is easier than ever in SvelteKit.</p>
    <p>Routes are set up in the same fashion as pages.</p>
    <p>Create a <code>+server.js</code> file at the route folder you wish to use for the url.</p>
    <p>Export an async function, GET or POST, depending on the desired REST method</p>
    <code>{`export async function GET({ url, request }) { }`}</code>
    <p>Import the following package</p>
    <code>{`import { json } from '@sveltejs/kit'`}</code>
    <p>And use this to return a JSON response.</p>
    <hr>
    <h2>Using Environment Variables</h2>
    <p>Environment variables are automatically loaded from the .env</p>
    <p>Private variables are inaccessible from the client while public ones are.</p>
    <p>This also changes more based on whether you're using a static or dynamic variables (.env or assigned during runtime), so if you have more questions or your use case changes, check out this
        <a href="https://joyofcode.xyz/sveltekit-environment-variables">Joy of Code article</a>
    </p>

    <p> Private Variables: </p>
    <code>{`import { SECRET_API_KEY } from '$env/static/private'`}</code>
    <p> Public Variables: </p>
    <code>{`import { PUBLIC_API_KEY } from '$env/static/public'`}</code>
</section>