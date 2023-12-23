<script>
    import "../styles/main.css";
    import { reviews } from "$lib";
</script>

<nav>
    <div>
        <a href="/">Home</a>
        <a href="/tut">Tutorial</a>
        <a href="/movies">Movies</a>
    </div>
    <p>Reviews: {Object.keys($reviews).length}</p>
</nav>
<main>
    <slot />
</main>

<style>
    nav {
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100%;
        border-bottom: 14px double #ffffff;
    }
    p {
        padding-right: 1rem;
    }
    a {
        color: inherit;
        text-decoration: none;
        display: inline-block;
        padding: 1rem;
        background-color: #414288;
    }
    a:hover {
        background-color: #1619ae;
    }
</style>
