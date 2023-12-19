<script>
    function btnClicked() {
        clicked++;
    }

    function handleMousemove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }
    let clicked = 0;
    let m = { x: 0, y: 0 };
</script>

<section>
    <h1>Event Handlers</h1>
    <p>
        Instead of native attributes such as onClick, svelte has it's own syntax
        for registering callbacks to events.
    </p>
    <code>{"on:click={btnClicked}"}</code>
    <button on:click={btnClicked}>Click me</button>
    <p>Clicked: {clicked}</p>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:mousemove={handleMousemove}>
        <span>
            Drag mouse in area Mouse position: x: {m.x}, y:{m.y}
        </span>
    </div>
</section>

<style>
    div {
        margin-top: 5rem;
        height: 900px;
        width: 100%;
        border: 1px solid yellow;
    }
    span {
        display: block;
        padding: 2rem;
    }
</style>
