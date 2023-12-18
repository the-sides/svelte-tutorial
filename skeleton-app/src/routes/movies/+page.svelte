<script>
    import Movie from "./Movie.svelte";

    export let data;
    let query, movies;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${data.token}&query=`;

    $: if (query) movies = fetch(url + query).then((rs) => rs.json());
    $: if (query === '') movies = null;
</script>

<section>
    <input type="text" bind:value={query} />
    {#await movies}
        Loading...
    {:then data }
        {#if data}
            {#each data.results as movie}
                <Movie {...movie} />
            {/each}
        {/if}
    {/await}
</section>

<style>
    input {
        color: black;
    }
</style>
