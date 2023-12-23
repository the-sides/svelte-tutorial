<script>
    import { reviews } from "$lib";
    export let id;
    function submitReview(val) {
        reviews.update((latestReviews) => {
            if(latestReviews[id] === val) {
                delete latestReviews[id];
                return {...latestReviews}
            }
            return { ...latestReviews, [id]: val };
        });
    }
</script>

<div>
    <button on:click={() => submitReview(1)}>1</button>
    <button on:click={() => submitReview(2)}>2</button>
    <button on:click={() => submitReview(3)}>3</button>
    <button on:click={() => submitReview(4)}>4</button>
    <button on:click={() => submitReview(5)}>5</button>
</div>
{#if $reviews[id]}
    <p>My Review: {$reviews[id]}</p>
{/if}

<style>
    div {
        display: flex;
        justify-content: start;
    }
</style>
