
<script>

import range from 'lodash/range'

const SUBSECTIONS = 10
const BASE_SIZE = 100

let containerElement

</script>
    
<style>

div
{
    width: 100%;
    height: 100%;
}

svg
{
    opacity: 0.75;
}

line
{
    stroke: grey;
    stroke-width: 0.5px;
}

</style>

<div bind:this={containerElement}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {BASE_SIZE} {BASE_SIZE}">            
        {#each range(0, SUBSECTIONS + 1).map((value) => value * (BASE_SIZE / SUBSECTIONS)) as y}
            <line x1="{0}" x2="{BASE_SIZE}" y1="{y}" y2="{y}"></line>
        {/each}

        {#each range(0, SUBSECTIONS + 1).map((value) => value * (BASE_SIZE / SUBSECTIONS)) as x}
            <line x1="{x}" x2="{x}" y1="{0}" y2="{BASE_SIZE}"></line>
        {/each}
    </svg>
</div>
    