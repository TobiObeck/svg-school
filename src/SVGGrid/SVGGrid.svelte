
<script>

import range from 'lodash/range'

const SUBSECTIONS = 10

export let size = 100

</script>
    
<style>

svg
{
    opacity: 0.75;
}

line
{
    stroke: grey;
}

</style>

<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}">            
        {#each range(0, SUBSECTIONS + 1).map((value) => value * (size / SUBSECTIONS)) as y}
            <line x1="{0}" x2="{size}" y1="{y}" y2="{y}"></line>
        {/each}

        {#each range(0, SUBSECTIONS + 1).map((value) => value * (size / SUBSECTIONS)) as x}
            <line x1="{x}" x2="{x}" y1="{0}" y2="{size}"></line>
        {/each}
    </svg>
</div>
    