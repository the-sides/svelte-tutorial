<script>
    export let title;
    export let release_date;
    export let overview;
    let release_year = release_date.split('-')[0] ?? ''
</script>

<h4>{title} ({release_date}): </h4>
<p>{overview}</p>