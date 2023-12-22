<script>
    export let text;
    // Default prop value
    export let color = 'white';

</script>

<div>
    <h2 style="--text-color: {color}">{text}</h2>
</div>


<style>
    div {
        background-color: black;
        border-radius: 4px;
        border: 1px solid white;
        padding: 0.5rem 2rem;
        position: relative;
    }
    h2 {
        color: var(--text-color);
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