

<script>

import { onMount } from 'svelte'
const { min } = Math

let squareElement

const update = () => 
{
    const parent = squareElement.parentElement
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
    
    const minParentDimension = min(innerWidth, innerHeight)

    // console.log(boundingRect, innerWidth, innerHeight)

    squareElement.style.width = `${minParentDimension}px`
    squareElement.style.height = `${minParentDimension}px`
}

onMount(update)

</script>


<svelte:window on:resize={update}></svelte:window>

<div bind:this={squareElement}>
    <slot></slot>
</div>