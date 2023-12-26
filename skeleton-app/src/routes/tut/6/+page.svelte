<script>
    const fruit = ['🍌','🍊','🍉','🍒','🍓','🍎']
    const getRandomFruit = () => fruit[Math.floor(Math.random() * 6)];

    // Reactive Assignments
    let quantity = 1;
    let cart = ['🍇'];

    function addToCart() {
        ++quantity;
        // cart.push(getRandomFruit())
        cart = [...cart, getRandomFruit()]
    }

    // Reactive Declarations (re-run this code whenever any of the referenced values change)
    $: remaining = 10 - quantity;

    // Reactive Statements
    $: console.log(`There are only ${remaining} remaining!`)

</script>

<section>
    <h1>Reactivity</h1>
    <p>There are 3 kinds of reactivity in Svelte. Assignments, Declarations and Statements.</p>
    <button on:click={addToCart}>Add To Cart</button>
    <div>Remaining Inventory: {remaining}</div>
    <p>Cart (#{quantity}): {cart}</p>
</section>

<style>
    div {
        margin: 2rem 0;
    }
</style>