<script>
    import '../styles/main.css';
</script>
<nav>
    <a href="/">Home</a>
    <a href="/tut">Tutorial</a>
    <a href="/movies">Movies</a>
</nav>
<main>
    <slot/>
</main>
<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        border-bottom: 14px double #ffffff ;
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