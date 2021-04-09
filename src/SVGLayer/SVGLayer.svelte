
<script>

export let svg = ''
export let opacity = 1.0

let svgElement

export const getSVGElement = () => 
{
    return svgElement
}

const BASE_SIZE = 100

</script>


<style>

div
{
    width: 100%;
    height: 100%;
}

svg
{
    width: 100%;
    height: 100%;
}

</style>


<div style="opacity: {opacity}">
    <svg bind:this={svgElement} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {BASE_SIZE} {BASE_SIZE}" >
        {@html svg}
    </svg>
</div>
