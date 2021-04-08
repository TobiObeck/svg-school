
<script>

export let svg = ''
export let opacity = 1.0
export let size = 100

let svgElement

export const getSVGElement = () => 
{
    return svgElement
}

const BASE = 100



</script>

<style>

</style>

<div style="opacity: {opacity}">
    <svg bind:this={svgElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {BASE} {BASE}" width="{size}" height="{size}" >
        {@html svg}
    </svg>
</div>
