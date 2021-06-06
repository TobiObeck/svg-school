<script>

import range from 'lodash/range'

import LevelButton from "./LevelButton.svelte"
export let amountOfLevels = 10
export let levelsPassed = 0
export let currentLevel = 0

</script>
    
<style>

</style>
<p>
You passed {levelsPassed} of {amountOfLevels} Levels!!!
You are in Level {currentLevel + 1}
</p>

<section style="">
    <p>Level select:</p>
    <LevelButton></LevelButton>

    {#each range(0, amountOfLevels) as levelIndex}
        <input type="radio" id="level_{levelIndex}" name="level" value="{levelIndex}">
        <label for="level_{levelIndex}">{levelIndex + 1}</label><br>    
    {/each}
</section>