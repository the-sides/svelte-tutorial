<script>
    import Movie from "./Movie.svelte";
    let query, movies;
    $: if (query)
        movies = fetch('/search?q=' + query)
            .then((rs) => rs.json())
            .then((d) => {
                console.log(d);
                return d;
            });
    $: if (query === "") movies = null;
</script>

<section>
    <input type="text" bind:value={query} placeholder="Enter a movie title" />
    {#await movies}
        Loading...
    {:then data}
        {#if data && data.results.length > 0}
            {#each data.results as movie}
                <Movie {...movie}/>
            {/each}
        {:else if query}
            <p>No Results Found</p>
        {:else}
            <p>Start typing to search</p>
        {/if}
    {/await}
</section>

<style>
    input {
        padding: 0.5rem 1rem;
        color: black;
    }
</style>
