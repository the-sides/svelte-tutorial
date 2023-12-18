<!-- svelte-ignore a11y-missing-attribute -->
<script>
    const urls = [
        '/nikita-pishchugin-ItXheI8pNHI-unsplash.jpg',
        '/ashville-painting.jpg',
    ] ;
    const image = {
        src: urls[0],
        title: 'Sample Image',
        class: 'image-class',
        alt: 'This is just a demo image'
    }
</script>

<section>
    <h1>Dynamic Attribute props</h1>
    <div>
        <img {...image}>
        <img {...image} src={urls[1]}>
        <img src={urls[1]} {...image}>
    </div>
</section>









<style>
    div {
        display: flex;
        gap: 0 2rem;
        margin-top: 4rem;
    }
    img {
        flex: 1 1 0;
        width: 1px;
        object-fit: cover;
    }
</style>