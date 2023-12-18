<script>
    // Either
    // function goPrev() {
    //     const end = window.location.href.split('/').at(-1)
    //     const front = window.location.href;
    //     if(typeof Number(end) === "number") {
    //         if(end === '2') {
    //             window.location.href = front + '/1a';
    //         }
    //         if(end === '1a') {
    //             window.location.href = front + '/1';
    //         }
    //         else {
    //             window.location.href = front + '/2';
    //         }
    //     }
    // }
</script>

<slot />

<div></div>

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    :global(body) {
        min-height: 100vh;
        padding-bottom: 24px;
    }
</style>
