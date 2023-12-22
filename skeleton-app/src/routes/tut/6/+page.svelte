<script>
    const fruit = ['🍌','🍊','🍉','🍒','🍓','🍎']
    const getRandomFruit = () => fruit[Math.floor(Math.random() * 6)];

    // Reactive Assignments
    let quantity = 1;
    let cart = ['🍇'];

    function addToCart() {
        quantity = ++quantity;
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
    <button on:click={addToCart}>Add To Cart</button>
    <div>Remaining Inventory: {remaining}</div>
    <p>Cart (#{quantity}): {cart}</p>
</section>

<style>
    div {
        margin: 2rem 0;
    }
</style>