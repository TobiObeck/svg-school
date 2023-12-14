
<script>

import { onMount } from 'svelte'
const { floor } = Math

const DENSITY = 1
const VIEWBOX_SIZE = 100

let canvasElement
let containerElement

const getParentSize = (element) => 
{
    const parent = element.parentElement
    const parentStyle = parent.currentStyle || window.getComputedStyle(parent);
    const boundingRect = parent.getBoundingClientRect()

    const totalWidth = boundingRect.right - boundingRect.left 
    const borderWidth = parseInt(parentStyle.borderLeftWidth) + parseInt(parentStyle.borderRightWidth)
    const paddingWidth = parseInt(parentStyle.paddingLeft) + parseInt(parentStyle.paddingRight)
    const innerWidth = totalWidth - borderWidth - paddingWidth

    const totalHeight = boundingRect.bottom - boundingRect.top 
    const borderHeight = parseInt(parentStyle.borderTopWidth) + parseInt(parentStyle.borderBottomWidth)
    const paddingHeight = parseInt(parentStyle.paddingTop) + parseInt(parentStyle.paddingBottom)
    const innerHeight = totalHeight - borderHeight - paddingHeight

    return { width: innerWidth, height: innerHeight}
}

const update = () => 
{
    const parentSize = getParentSize(canvasElement)

    canvasElement.width = parentSize.width
    canvasElement.height = parentSize.height

    const widthRatio = floor(canvasElement.width / VIEWBOX_SIZE) + 1
    const heightRatio = floor(canvasElement.height / VIEWBOX_SIZE) + 1

    const ctx = canvasElement.getContext('2d')
    
    for(let x=0; x<VIEWBOX_SIZE; x += DENSITY)
    for(let y=0; y<VIEWBOX_SIZE; y += DENSITY)
    {
        ctx.fillStyle = ((x + y) % 2 === 0) ? '#fff' : '#ddd'
        ctx.fillRect(x * widthRatio, y * heightRatio, DENSITY * widthRatio, DENSITY * heightRatio)
    }
}

onMount(() => 
{
    new ResizeObserver(update).observe(containerElement)
})


</script>

<style>

div
{
    width: 100%;
    height: 100%;
}

canvas
{
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

</style>

<div bind:this="{containerElement}">
    <canvas width="100" height="100" bind:this={canvasElement}></canvas>
</div>
    