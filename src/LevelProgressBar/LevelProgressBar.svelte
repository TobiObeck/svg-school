<script>

import { createEventDispatcher } from 'svelte'
import range from 'lodash/range'

export let amountOfLevels = 10
export let levelsPassed = 0
export let currentLevel = 0

const dispatch = createEventDispatcher()

const onLevelClick = (levelIndex) => 
{
    dispatch('levelChange', { levelIndex: levelIndex })
}

</script>
    
<style>

</style>

<p>
You passed {levelsPassed} of {amountOfLevels} Levels!!!
You are in Level {currentLevel + 1}
</p>

<section style="">
    <p>Level select:</p>
    {#each range(0, amountOfLevels) as levelIndex}
        <input on:click={() => { onLevelClick(levelIndex) }} type="radio" id="level_{levelIndex}" name="level" value="{levelIndex}">
        <label for="level_{levelIndex}">{levelIndex + 1}</label><br>    
    {/each}
</section>