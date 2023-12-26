<script>
    const fruit = ['🍌','🍊','🍉','🍒','🍓','🍎']
    const getRandomFruit = () => fruit[Math.floor(Math.random() * 6)];

    let hands = 1;
    let cart = ['🍇'];

    function addToCart() {
        let i = hands; 
        while(i-- > 0)
            cart = [...cart, getRandomFruit()]
    }

</script>

<section>
    <h1>Binding</h1>
    <button on:click={addToCart}>Add To Cart</button>
    <p>Cart (#{cart.length}): {cart}</p>
    <p>Hands: {hands}</p>
    <input type="range" bind:value={hands} min={0} max={4}>
</section>