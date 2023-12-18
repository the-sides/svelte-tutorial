<script>
    const year = new Date().getFullYear();
    const years = [];
    let i = 2025;
    while(i-- > 1990) {
        years.push(i)
    }
</script>


<section>
    <h1>If Statements and Loops</h1>
    <!-- If Statement, starting with a # -->
    {#if year === 2024}
        <h2>It is the new year.</h2>    
    <!-- Else statements start with a color -->
    {:else}
        <h2>New Years hasn't come yet.</h2>    
    <!-- Closing a block is done with a slash and the block name -->
    {/if}

    <!-- Loops are done using #each -->
    {#each years as year}
        <p>{year}: The Olympics are {year % 4 === 0 ? '' : 'not'} this year</p>
    {/each}
</section>