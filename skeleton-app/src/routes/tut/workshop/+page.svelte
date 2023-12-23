<section>
    <h1>Movie App</h1>
    <p>Todo apps are overdone, let's do a movie lookup app instead.</p>
    <h3>Quick Run Down</h3>
    <ul>
        <li>Make an API endpoint that pulls from the TMDB Movie API.</li>
        <li>
            Using environment variables to track the api key.

            <sub
                >Psst, base64 decode this
                ZTk1ZDAyMTY0NzM3MTI5OGFlNzk2NTI2ZmVlMjAzNTk=</sub
            >
        </li>
        <li>Make a new page under <code>/movies</code>.</li>
        <li>Using a binded text input to keep track of the user's query.</li>
        <li>Call the local API and use an :await block to handle the fetch.</li>
        <li>Make a {'<Movie/>'} component and pass each result item.</li>
    </ul>
    <p>If you want to go above and beyond:</p>
    <ul>
        <li>Use the svelte/store to assign ratings.</li>
        <li>Build pagination.</li>
    </ul>
</section>
