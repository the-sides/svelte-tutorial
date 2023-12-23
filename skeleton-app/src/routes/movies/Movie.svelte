<script>
    import Reviews from "./Reviews.svelte";

    export let title;
    export let release_date;
    export let overview;
    export let poster_path;
    export let id;
    let release_year = release_date.split("-")[0] ?? "";
</script>

<div class="movie">
    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" width="200" height="300" />
    <div>
        <h2>{title} ({release_year})</h2>
        <p>{overview}</p>
        <Reviews {id}/>
    </div>
</div>

<style>
    .movie {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;
    }
    img {
        object-fit: cover;
    }
</style>
