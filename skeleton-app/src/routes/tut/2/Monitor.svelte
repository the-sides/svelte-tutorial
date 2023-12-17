<script>
    export let text;
</script>

<div>
    <h2>{text}</h2>
</div>

<style>
    div {
        background-color: black;
        border-radius: 4px;
        border: 1px solid white;
        padding: 0.5rem 2rem;
        position: relative;
    }
    div::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 9px;
        background-color: white;
        top: 8px;
        left: 8px;
    }
    div::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 9px;
        background-color: white;
        top: 8px;
        left: 18px;
    }
</style>