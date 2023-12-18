<script>
    import Movie from "./Movie.svelte";

    export let data;
    let query = '';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${data.token}&query=`

    $: movies = fetch(url + query).then(rs => rs.json())
</script>

<section>
    <input type="text" bind:value={query}>
    {#await movies}
        Loading...        
    {:then data} 
        {#each data.results as movie}
            <Movie {...movie}/>
        {/each}
    {/await}
</section>

<style>
    input {
        color: black;
    }
</style>