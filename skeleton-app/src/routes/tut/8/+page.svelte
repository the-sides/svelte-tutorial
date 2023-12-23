<script>
    const fetchRes = new Promise((res, _rej) =>
        setTimeout(() => res("finished"), 3000),
    );
</script>

<section>
    <h1>Asynchronous code</h1>
    <p>Svelte provides a logic block for handling promises.</p>
    {#await fetchRes}
        <p>waiting...</p>
    {:then result}
        <p>Result: {result}</p>
    {:catch err}
        <p>The following error occured: {err}</p>
    {/await}
</section>
