<script>
    import Monitor from "./Monitor.svelte";
</script>

<section>
    <h1>Components</h1>
    <p>Components are the backbone of all modern front-end frameworks.</p>
    <p>In Svelete, they're as simple as can be.</p>

    <!-- Component we are passing a text prop to -->
    <Monitor text="World"/>

    <p>Styles are still scoped to the component.</p>
    <h2>I'M THE SAME ELEMENT AND NOT AFFECTED!</h2>
</section>

<style>
    h2 {
        margin-top: auto;
        color: peru;
    }

    section {
        display: flex;
        flex-direction: column;
        height: 70vh;
        align-items: start;
    }
</style>